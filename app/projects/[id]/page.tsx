import { projects } from "@/data/portfolio";
import ProjectDetailClient from "./ProjectDetailClient";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) notFound();

  const idx = projects.findIndex((p) => p.id === id);
  const prev = projects[idx - 1] ?? null;
  const next = projects[idx + 1] ?? null;

  return <ProjectDetailClient project={project} prev={prev} next={next} />;
}
