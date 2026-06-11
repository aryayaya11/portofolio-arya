import asyncio
from playwright.async_api import async_playwright
import pandas

listnamahotel = []
listharga = []
listtempat = []
listrating = []
listbintang = []

async def run():
    user_data_dir = r"C:\Users\ryanz\AppData\Local\Google\Chrome\User Data\Profile 4"
    async with async_playwright() as p:
        context = await p.chromium.launch_persistent_context(
            user_data_dir=user_data_dir,
            channel='chrome',
            headless=False)

        page = context.pages[0] if context.pages else await context.new_page()
        await page.goto('https://www.traveloka.com/en-id/hotel/search?spec=03-06-2025.04-06-2025.1.1.HOTEL_GEO.103570.Surabaya.1')
        await asyncio.sleep(6)
        await page.wait_for_selector('.css-1dbjc4n.r-1d2f490.r-u8s1d.r-ipm5af.r-13qz1uu')
        while len(listnamahotel) <= 250:
            elements = await page.query_selector_all('.css-1dbjc4n.r-1d2f490.r-u8s1d.r-ipm5af.r-13qz1uu')

            for i in elements:
                if len(listnamahotel) >= 10:
                    
                    await page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
                    await asyncio.sleep(10)
                    element = await page.query_selector_all('.css-1dbjc4n.r-1d2f490.r-u8s1d.r-ipm5af.r-13qz1uu')
                    for j in element:
                        nama__hotel_element = await j.query_selector('[data-testid="tvat-hotelName"]')
                        nama_hotel = await nama__hotel_element.text_content()
                        if nama_hotel not in listnamahotel:
                            listnamahotel.append(nama_hotel)
                            harga_element = await j.query_selector('[data-testid="tvat-hotelPrice"]')
                            harga = await harga_element.text_content() if harga_element else '-'
                            listharga.append(harga)
                            tempat_element = await j.query_selector('div[class*="bfa6kz"]')
                            tempat = await tempat_element.inner_text() if tempat_element else '-'
                            listtempat.append(tempat)
                            rating_element = await j.query_selector('[data-testid="tvat-ratingScore"]')
                            rating = await rating_element.inner_text() if rating_element else '-'
                            listrating.append(rating)
                            bintang_element = await j.query_selector('[data-id="tvat-starRating"]')
                            bintang1 = await bintang_element.query_selector_all('svg[xmlns="http://www.w3.org/2000/svg"]') if bintang_element else '-'
                            bintang = len(bintang1) if bintang1 else '-'
                            listbintang.append(bintang)
                if len(listnamahotel) <= 10:
                    nama_hotel_element = await i.query_selector('[data-testid="tvat-hotelName"]')
                    nama_hotel = await nama_hotel_element.text_content()
                    if nama_hotel not in listnamahotel:
                        listnamahotel.append(nama_hotel)
                        harga_element = await i.query_selector('[data-testid="tvat-hotelPrice"]')
                        harga = await harga_element.text_content() if harga_element else '-'
                        listharga.append(harga)
                        tempat_element = await i.query_selector('div[class*="bfa6kz"]')
                        tempat = await tempat_element.inner_text() if tempat_element else '-'
                        listtempat.append(tempat)
                        rating_element = await i.query_selector('[data-testid="tvat-ratingScore"]')
                        rating = await rating_element.inner_text() if rating_element else '-'
                        listrating.append(rating)
                        bintang_element = await i.query_selector('[data-id="tvat-starRating"]')
                        bintang1 = await bintang_element.query_selector_all('svg[xmlns="http://www.w3.org/2000/svg"]') if bintang_element else '-'
                        bintang = len(bintang1) if bintang1 else '-'
                        listbintang.append(bintang)
                        
        table_nama = pandas.DataFrame(listnamahotel, columns=['Nama Hotel'])
        table_harga = pandas.DataFrame(listharga, columns=['Harga dalam semalam'])
        table_rating = pandas.DataFrame(listrating, columns=['Rating'])
        table_bintang = pandas.DataFrame(listbintang, columns=['Bintang Hotel'])
        table_tempat = pandas.DataFrame(listtempat, columns=['Lokasi'])
        df_final = pandas.concat([table_nama, table_tempat, table_harga, table_bintang, table_rating], axis=1)
        df_final.to_csv('data datmin mentah.csv', index=False)
        await context.close()

asyncio.run(run())
