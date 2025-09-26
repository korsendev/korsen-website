"use client"

import { useState } from "react"
import styles from "./code-editor.module.css"

const codeSnippets = [
  {
    language: "typescript",
    title: "Desarrollo Web",
    fileName: "WebDevelopment.tsx",
    code: `import React from 'react';
import { ServiceProps } from '../types/services';

interface WebDevelopmentProps extends ServiceProps {
  technologies: string[];
  isResponsive: boolean;
}

export default function WebDevelopment({ 
  technologies = ['React', 'Next.js', 'TypeScript'],
  isResponsive = true 
}: WebDevelopmentProps) {
  const handleContactClick = () => {
    // Lógica para contactar
    console.log('Contactando para desarrollo web...');
  };

  return (
    <div className="service-container">
      <h1>Desarrollo Web</h1>
      <p>
        Creamos sitios web modernos y aplicaciones web escalables 
        utilizando las últimas tecnologías como React, Next.js, 
        y TypeScript. Nuestros desarrollos son responsivos, 
        optimizados para SEO y con rendimiento excepcional.
      </p>
      <div className="technologies">
        {technologies.map((tech, index) => (
          <span key={index} className="tech-badge">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}`,
  },
  {
    language: "typescript",
    title: "Apps Móviles",
    fileName: "MobileApps.tsx",
    code: `import React, { useState, useEffect } from 'react';
import { Platform } from 'react-native';

interface MobileAppConfig {
  platform: 'iOS' | 'Android' | 'Cross-platform';
  framework: 'React Native' | 'Flutter' | 'Native';
  features: string[];
}

export default function MobileApps() {
  const [config, setConfig] = useState<MobileAppConfig>({
    platform: 'Cross-platform',
    framework: 'React Native',
    features: ['Push Notifications', 'Offline Support', 'Analytics']
  });

  useEffect(() => {
    // Detectar plataforma
    const currentPlatform = Platform.OS;
    console.log('Plataforma detectada:', currentPlatform);
  }, []);

  return (
    <div className="service-container">
      <h1>Desarrollo de Apps Móviles</h1>
      <p>
        Desarrollamos aplicaciones móviles nativas e híbridas 
        para iOS y Android. Utilizamos React Native, Flutter 
        y tecnologías nativas para crear apps de alto rendimiento.
      </p>
    </div>
  );
}`,
  },
  {
    language: "typescript",
    title: "APIs & Backend",
    fileName: "BackendServices.tsx",
    code: `import express, { Request, Response } from 'express';
import { Database } from '../config/database';
import { AuthMiddleware } from '../middleware/auth';

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message: string;
  timestamp: Date;
}

class BackendService {
  private app: express.Application;
  private db: Database;

  constructor() {
    this.app = express();
    this.db = new Database();
    this.setupMiddleware();
    this.setupRoutes();
  }

  private setupMiddleware(): void {
    this.app.use(express.json());
    this.app.use(AuthMiddleware);
  }

  private setupRoutes(): void {
    this.app.get('/api/health', this.healthCheck);
    this.app.post('/api/users', this.createUser);
  }

  private healthCheck = (req: Request, res: Response) => {
    const response: ApiResponse<null> = {
      success: true,
      message: 'API funcionando correctamente',
      timestamp: new Date()
    };
    res.json(response);
  };
}

export default BackendService;`,
  },
  {
    language: "typescript",
    title: "E-commerce",
    fileName: "EcommerceSolutions.tsx",
    code: `import React, { useContext, useMemo } from 'react';
import { CartContext } from '../context/CartContext';
import { Product, CartItem } from '../types/ecommerce';

interface EcommerceProps {
  products: Product[];
  currency: string;
  taxRate: number;
}

export default function EcommerceSolutions({ 
  products, 
  currency = 'USD',
  taxRate = 0.08 
}: EcommerceProps) {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  const totalAmount = useMemo(() => {
    return cart.reduce((total: number, item: CartItem) => {
      return total + (item.price * item.quantity);
    }, 0);
  }, [cart]);

  const handlePurchase = async (productId: string) => {
    try {
      const response = await fetch('/api/purchase', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId, currency })
      });
      
      if (response.ok) {
        console.log('Compra exitosa');
      }
    } catch (error) {
      console.error('Error en la compra:', error);
    }
  };

  return (
    <div className="ecommerce-container">
      <h1>Soluciones E-commerce</h1>
      <p>Total: {totalAmount.toFixed(2)} {currency}</p>
    </div>
  );
}`,
  },
]

const fileStructure = [
  { name: "Code Profile", type: "header", level: 0 },
  { name: "A project by Korsen", type: "subtitle", level: 0 },
  { name: "", type: "spacer", level: 0 },
  { name: "PROJECT ROOT", type: "folder", level: 0, expanded: true },
  { name: "services", type: "folder", level: 1, expanded: true },
  { name: "WebDevelopment.tsx", type: "file", level: 2, active: true },
  { name: "MobileApps.tsx", type: "file", level: 2 },
  { name: "BackendServices.tsx", type: "file", level: 2 },
  { name: "EcommerceSolutions.tsx", type: "file", level: 2 },
  { name: "components", type: "folder", level: 1, expanded: false },
  { name: "utils", type: "folder", level: 1, expanded: false },
  { name: "package.json", type: "file", level: 1 },
  { name: "tsconfig.json", type: "file", level: 1 },
]

export function CodeEditor() {
  const [currentSnippet, setCurrentSnippet] = useState(0)

  const snippet = codeSnippets[currentSnippet]
  const lines = snippet.code.split("\n")

  const handleFileClick = (fileName: string) => {
    const index = codeSnippets.findIndex(snippet => snippet.fileName === fileName)
    if (index !== -1) {
      setCurrentSnippet(index)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.editorWrapper}>
      {/* Acrylic background layers using web colors */}
      <div className={styles.acrylicBackground}></div>
      
      <div className={styles.acrylicGlow}></div>
      
      <div className={styles.radialGradient}></div>

      <div className={styles.editor}>
        <div className={styles.header}>
          <div className={styles.windowControls}>
            <div className={styles.controlButtons}>
              <div className={`${styles.controlButton} ${styles.red}`}></div>
              <div className={`${styles.controlButton} ${styles.yellow}`}></div>
              <div className={`${styles.controlButton} ${styles.green}`}></div>
            </div>
            <div className={styles.ideInfo}>
              <svg className={styles.ideIcon} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className={styles.ideText}>Korsen IDE</span>
            </div>
          </div>
          <div className={styles.headerActions}>
            <div className={styles.searchButton}>
              <svg className={styles.searchIcon} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
              </svg>
            </div>
          </div>
        </div>

        <div className={styles.mainContent}>
          {/* Sidebar - Hidden on mobile, collapsible on tablet */}
          <div className={styles.sidebar}>
            <div className={styles.sidebarHeader}>
              <h3 className={styles.sidebarTitle}>Code Profile</h3>
              <p className={styles.sidebarSubtitle}>A project by Korsen</p>
            </div>
            
            <div className={styles.fileList}>
              {fileStructure.map((item, index) => {
                if (item.type === "header") return null;
                if (item.type === "subtitle") return null;
                if (item.type === "spacer") return <div key={index} style={{ height: '0.75rem' }}></div>;
                
                return (
                  <div
                    key={index}
                    onClick={() => item.type === "file" && item.name.endsWith('.tsx') && handleFileClick(item.name)}
                    className={`${styles.fileItem} ${
                      item.name === snippet.fileName ? styles.active : styles.inactive
                    }`}
                    style={{ paddingLeft: `${12 + item.level * 20}px` }}
                  >
                    {item.type === "folder" ? (
                      <>
                        <svg className={`${styles.fileIcon} ${styles.folderIcon}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
                        </svg>
                        <span className={styles.fileName}>{item.name}</span>
                      </>
                    ) : (
                      <>
                        <svg className={`${styles.fileIcon} ${styles.fileIconOrange}`} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd"></path>
                        </svg>
                        <span>{item.name}</span>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            {/* Mobile file selector */}
            <div className={styles.mobileSelector}>
              <select 
                value={currentSnippet} 
                onChange={(e) => setCurrentSnippet(Number(e.target.value))}
                className={styles.mobileSelect}
              >
                {codeSnippets.map((tab, index) => (
                  <option key={index} value={index}>{tab.fileName}</option>
                ))}
              </select>
            </div>

            {/* Desktop tabs */}
            <div className={styles.tabsContainer}>
              {codeSnippets.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSnippet(index)}
                  className={`${styles.tab} ${
                    index === currentSnippet ? styles.active : styles.inactive
                  }`}
                >
                  <div className={`${styles.tabIndicator} ${
                    tab.language === 'typescript' ? styles.typescript :
                    tab.language === 'javascript' ? styles.javascript :
                    styles.defaultLang
                  }`}></div>
                  <span className={styles.tabName}>{tab.fileName}</span>
                  <span className={styles.tabNameMobile}>{tab.fileName.split('.')[0]}</span>
                  <button className={styles.tabClose}>×</button>
                </button>
              ))}
            </div>

            <div className={styles.codeContainer}>
              {/* Line Numbers - Hidden on mobile */}
              <div className={styles.lineNumbers}>
                {lines.map((_, index) => (
                  <div key={index} className={styles.lineNumber}>
                    {index + 1}
                  </div>
                ))}
              </div>

              {/* Code Content */}
              <div className={styles.codeContent}>
                <pre className={styles.codeBlock}>
                  <code 
                    className={styles.codeLine}
                    dangerouslySetInnerHTML={{
                      __html: snippet.code
                        // Comments
                        .replace(/\/\/(.*)/g, '<span style="color: #6b7280; font-style: italic;">// $1</span>')
                        // Keywords (purple/blue)
                        .replace(/\b(export|default|function|const|let|var|return|import|from|interface|type|class|extends|implements)\b/g, '<span style="color: #c084fc; font-weight: 600;">$1</span>')
                        // JSX/HTML tags (green - Korsen color)
                        .replace(/&lt;(\/?)(div|h1|p|span|section|header|nav|main|footer|article|aside)([^&]*?)&gt;/g, '&lt;<span style="color: #00FF2F;">$1$2</span><span style="color: #60a5fa;">$3</span>&gt;')
                        .replace(/<(\/?)(div|h1|p|span|section|header|nav|main|footer|article|aside)([^>]*?)>/g, '&lt;<span style="color: #00FF2F;">$1$2</span><span style="color: #60a5fa;">$3</span>&gt;')
                        // Attributes (blue)
                        .replace(/\b(className|id|style|onClick|onChange|onSubmit|href|src|alt|title)\b/g, '<span style="color: #60a5fa;">$1</span>')
                        // Strings (green)
                        .replace(/"([^"]*)"/g, '<span style="color: #34d399;">"$1"</span>')
                        .replace(/'([^']*)'/g, '<span style="color: #34d399;">\'$1\'</span>')
                        .replace(/`([^`]*)`/g, '<span style="color: #34d399;">`$1`</span>')
                        // Numbers (yellow)
                        .replace(/\b(\d+)\b/g, '<span style="color: #fbbf24;">$1</span>')
                        // Brackets and parentheses (white)
                        .replace(/([{}()[\];,.])/g, '<span style="color: #ffffff;">$1</span>')
                        // Function names (yellow)
                        .replace(/\b([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/g, '<span style="color: #fbbf24;">$1</span>(')
                    }}
                  />
                  <span className={styles.cursor}>|</span>
                </pre>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <div className={styles.footerContent}>
            <div className={styles.footerLeft}>
              <span className={styles.languageInfo}>{snippet.language}</span>
              <span className={styles.encodingInfo}>UTF-8</span>
              <span className={styles.encodingInfo}>LF</span>
              <div className={styles.serverStatus}>
                <div className={styles.serverIndicator}></div>
                <span className={styles.serverText}>Korsen Dev Server</span>
              </div>
            </div>
            <div className={styles.footerRight}>
              <div className={styles.indicators}>
                {codeSnippets.map((_, index) => (
                  <div
                    key={index}
                    className={`${styles.indicator} ${
                      index === currentSnippet ? styles.active : styles.inactive
                    }`}
                  />
                ))}
              </div>
              <div className={styles.positionInfo}>
                Ln {lines.length}, Col 1
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
