"use client"

import { useState } from "react"

const codeSnippets = [
  {
    language: "typescript",
    title: "Desarrollo Web",
    fileName: "web-development.tsx",
    code: `// Creamos experiencias web únicas
interface KorsenWebConfig {
  framework: string;
  styling: string;
  performance: string;
  seo: string;
}

const korsenWeb: KorsenWebConfig = {
  framework: "Next.js",
  styling: "Tailwind CSS", 
  performance: "Optimizado",
  seo: "Perfecto"
};

export default function WebApp(): JSX.Element {
  return <div>Innovación Digital</div>;
}`,
  },
  {
    language: "typescript",
    title: "Apps Móviles",
    fileName: "mobile-app.tsx",
    code: `// Apps nativas de alto rendimiento
interface MobileAppProps {
  theme: 'light' | 'dark';
  performance: 'high' | 'ultra';
}

class KorsenMobileApp {
  private config: MobileAppProps;
  
  constructor(config: MobileAppProps) {
    this.config = config;
  }
  
  public render(): void {
    console.log('Experiencia móvil excepcional');
  }
}`,
  },
  {
    language: "typescript",
    title: "APIs & Backend",
    fileName: "api-service.tsx",
    code: `// Arquitecturas escalables y robustas
interface ApiResponse<T> {
  data: T;
  status: string;
  message?: string;
}

class KorsenAPI {
  async getProjects(): Promise<ApiResponse<Project[]>> {
    return {
      data: await this.fetchProjects(),
      status: "Proyectos dignos de dioses"
    };
  }
  
  private async fetchProjects(): Promise<Project[]> {
    // Infraestructura de clase mundial
    return [];
  }
}`,
  },
  {
    language: "typescript",
    title: "Base de Datos",
    fileName: "database.tsx",
    code: `// Diseño de datos inteligente
interface KorsenProject {
  id: number;
  name: string;
  technology: Record<string, any>;
  status: 'godlike' | 'excellent' | 'good';
  createdAt: Date;
}

class DatabaseManager {
  async createProject(project: Omit<KorsenProject, 'id'>): Promise<KorsenProject> {
    // Optimización y escalabilidad
    return { ...project, id: Date.now() };
  }
}`,
  },
]

const fileStructure = [
  { name: "PROJECT ROOT", type: "folder", level: 0 },
  { name: "src", type: "folder", level: 1 },
  { name: "components", type: "folder", level: 2 },
  { name: "Button.tsx", type: "file", level: 3 },
  { name: "Header.tsx", type: "file", level: 3 },
  { name: "pages", type: "folder", level: 2 },
  { name: "index.tsx", type: "file", level: 3 },
  { name: "about.tsx", type: "file", level: 3 },
  { name: "utils", type: "folder", level: 2 },
  { name: "api.ts", type: "file", level: 3 },
  { name: "package.json", type: "file", level: 1 },
  { name: "tsconfig.json", type: "file", level: 1 },
]

export function CodeEditor() {
  const [currentSnippet, setCurrentSnippet] = useState(0)

  const snippet = codeSnippets[currentSnippet]
  const lines = snippet.code.split("\n")

  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-br from-[#313131]/60 via-[#2a2a2a]/40 to-[#1f1f1f]/30 backdrop-blur-2xl rounded-2xl border border-[#00FF2F]/20 shadow-2xl"></div>

      <div className="absolute inset-0 bg-gradient-to-br from-[#00FF2F]/8 via-transparent to-[#00FF2F]/4 rounded-2xl blur-2xl opacity-70 group-hover:opacity-90 transition-all duration-700"></div>

      <div className="relative bg-[#313131]/80 backdrop-blur-3xl border border-[#00FF2F]/30 rounded-2xl overflow-hidden shadow-2xl min-h-[400px]">
        <div className="flex items-center justify-between px-4 py-2 bg-[#2a2a2a]/90 backdrop-blur-sm border-b border-[#00FF2F]/20">
          <div className="flex items-center space-x-3">
            <div className="flex space-x-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-[#00FF2F]/80"></div>
            </div>
            <span className="text-[#FFFFFF]/70 text-xs font-medium">Korsen IDE</span>
          </div>
          <div className="text-xs text-[#FFFFFF]/50">{snippet.title}</div>
        </div>

        <div className="flex h-[350px]">
          <div className="w-48 bg-[#2a2a2a]/60 backdrop-blur-sm border-r border-[#00FF2F]/20 p-3">
            <div className="text-xs font-medium text-[#FFFFFF]/80 mb-3 flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
              </svg>
              EXPLORER
            </div>
            <div className="space-y-1">
              {fileStructure.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center text-xs text-[#FFFFFF]/70 hover:text-[#00FF2F] transition-colors cursor-pointer py-0.5`}
                  style={{ paddingLeft: `${item.level * 12}px` }}
                >
                  {item.type === "folder" ? (
                    <svg className="w-3 h-3 mr-1 text-[#00FF2F]/60" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
                    </svg>
                  ) : (
                    <svg className="w-3 h-3 mr-1 text-blue-400/60" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  )}
                  <span className={item.name === snippet.fileName ? "text-[#00FF2F]" : ""}>{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 flex flex-col">
            <div className="flex bg-[#1f1f1f]/40 border-b border-[#00FF2F]/20">
              {codeSnippets.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSnippet(index)}
                  className={`flex items-center px-4 py-2 border-r border-[#00FF2F]/20 text-xs transition-all duration-200 hover:bg-[#313131]/60 ${
                    index === currentSnippet
                      ? "bg-[#313131]/60 text-[#FFFFFF]/90 border-b-2 border-b-[#00FF2F]"
                      : "text-[#FFFFFF]/60"
                  }`}
                >
                  <svg className="w-3 h-3 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  {tab.fileName}
                  <button className="ml-2 text-[#FFFFFF]/40 hover:text-[#FFFFFF]/80">×</button>
                </button>
              ))}
            </div>

            <div className="flex-1 flex bg-[#313131]/40">
              {/* Line Numbers */}
              <div className="w-12 bg-[#2a2a2a]/30 border-r border-[#00FF2F]/10 py-4 text-right pr-3">
                {lines.map((_, index) => (
                  <div key={index} className="text-xs text-[#FFFFFF]/40 leading-6 font-mono">
                    {index + 1}
                  </div>
                ))}
              </div>

              {/* Code Content */}
              <div className="flex-1 p-4 font-mono text-sm overflow-auto">
                <pre className="text-[#FFFFFF]/90 leading-6">
                  <code className="whitespace-pre-wrap">{snippet.code}</code>
                  <span className="animate-pulse text-[#00FF2F] font-bold duration-1000">|</span>
                </pre>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 py-2 bg-[#1f1f1f]/60 backdrop-blur-sm border-t border-[#00FF2F]/20">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center space-x-4">
              <span className="text-[#FFFFFF]/60">TypeScript</span>
              <span className="text-[#FFFFFF]/60">UTF-8</span>
              <span className="text-[#FFFFFF]/60">LF</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 rounded-full bg-[#00FF2F] animate-pulse"></div>
                <span className="text-[#00FF2F] font-medium">Korsen Dev Server</span>
              </div>
              <div className="flex items-center space-x-1">
                {codeSnippets.map((_, index) => (
                  <div
                    key={index}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      index === currentSnippet ? "bg-[#00FF2F] shadow-sm shadow-[#00FF2F]/50" : "bg-[#FFFFFF]/20"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
