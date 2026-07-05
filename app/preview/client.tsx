"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DesignPreview } from "@/components/designer/design-preview";
import { CodePreview } from "@/components/designer/code-preview";
import { ExternalLink, Code, Eye } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const exampleDesigns = [
  {
    id: 1,
    title: "Landing Page SaaS",
    description: "Landing page moderna para una startup de software",
    html: `
      <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <nav class="container mx-auto px-6 py-6 flex items-center justify-between">
          <div class="text-2xl font-bold text-indigo-600">SaaSify</div>
          <div class="hidden md:flex items-center space-x-8">
            <a href="#" class="text-gray-600 hover:text-indigo-600">Features</a>
            <a href="#" class="text-gray-600 hover:text-indigo-600">Pricing</a>
            <a href="#" class="text-gray-600 hover:text-indigo-600">About</a>
          </div>
          <button class="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700">Get Started</button>
        </nav>
        
        <main class="container mx-auto px-6 py-20">
          <div class="text-center max-w-3xl mx-auto">
            <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Build faster with <span class="text-indigo-600">AI</span>
            </h1>
            <p class="text-xl text-gray-600 mb-10">
              The smartest way to ship your next project. Automate your workflow and scale without limits.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <button class="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700">Start Free Trial</button>
              <button class="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-indigo-600">Watch Demo</button>
            </div>
          </div>
          
          <div class="mt-20 grid md:grid-cols-3 gap-8">
            <div class="bg-white p-8 rounded-2xl shadow-lg">
              <div class="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3 class="text-xl font-bold mb-2">Lightning Fast</h3>
              <p class="text-gray-600">Deploy in seconds with our optimized infrastructure.</p>
            </div>
            <div class="bg-white p-8 rounded-2xl shadow-lg">
              <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h3 class="text-xl font-bold mb-2">Secure by Default</h3>
              <p class="text-gray-600">Enterprise-grade security for all your data.</p>
            </div>
            <div class="bg-white p-8 rounded-2xl shadow-lg">
              <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              </div>
              <h3 class="text-xl font-bold mb-2">Team Collaboration</h3>
              <p class="text-gray-600">Work together seamlessly in real-time.</p>
            </div>
          </div>
        </main>
      </div>
    `,
  },
  {
    id: 2,
    title: "Portfolio Personal",
    description: "Portfolio minimalista para desarrollador",
    html: `
      <div class="min-h-screen bg-gray-50">
        <header class="bg-white shadow-sm">
          <div class="container mx-auto px-6 py-8 flex items-center justify-between">
            <div class="text-2xl font-bold text-gray-900">JM.dev</div>
            <nav class="flex items-center space-x-6">
              <a href="#" class="text-gray-600 hover:text-gray-900">Work</a>
              <a href="#" class="text-gray-600 hover:text-gray-900">About</a>
              <a href="#" class="text-gray-600 hover:text-gray-900">Contact</a>
            </nav>
          </div>
        </header>
        
        <main class="container mx-auto px-6 py-20">
          <div class="flex flex-col md:flex-row items-center gap-12 mb-20">
            <div class="w-48 h-48 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex-shrink-0"></div>
            <div class="text-center md:text-left">
              <h1 class="text-5xl font-bold text-gray-900 mb-4">Juan Manuel García</h1>
              <p class="text-xl text-gray-600 mb-6">Full-Stack Developer & UI/UX Designer</p>
              <p class="text-gray-500 max-w-lg">
                Building digital experiences that matter. Passionate about clean code, beautiful interfaces, and user-centered design.
              </p>
            </div>
          </div>
          
          <section class="mb-20">
            <h2 class="text-3xl font-bold text-gray-900 mb-8">Featured Work</h2>
            <div class="grid md:grid-cols-2 gap-8">
              <div class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
                <div class="h-48 bg-gradient-to-r from-blue-500 to-cyan-400"></div>
                <div class="p-6">
                  <h3 class="text-xl font-bold mb-2">E-Commerce Platform</h3>
                  <p class="text-gray-600 mb-4">Full-stack e-commerce solution with React and Node.js</p>
                  <div class="flex gap-2">
                    <span class="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">React</span>
                    <span class="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">Node.js</span>
                  </div>
                </div>
              </div>
              <div class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
                <div class="h-48 bg-gradient-to-r from-purple-500 to-pink-400"></div>
                <div class="p-6">
                  <h3 class="text-xl font-bold mb-2">Task Management App</h3>
                  <p class="text-gray-600 mb-4">Productivity app with real-time collaboration</p>
                  <div class="flex gap-2">
                    <span class="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">Next.js</span>
                    <span class="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm">Firebase</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    `,
  },
];

export function PreviewClient() {
  const [selectedDesign, setSelectedDesign] = useState<typeof exampleDesigns[0] | null>(null);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="mb-2 text-3xl font-bold tracking-tight">Ejemplos</h1>
        <p className="text-muted-foreground">
          Explorá diseños generados con Built para inspirarte
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {exampleDesigns.map((design) => (
          <Card key={design.id} className="overflow-hidden">
            <div className="h-64 bg-gradient-to-br from-blue-100 to-indigo-100">
              <DesignPreview html={design.html} />
            </div>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">{design.title}</CardTitle>
                <div className="flex gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSelectedDesign(design)}
                      >
                        <Eye className="mr-2 h-4 w-4" />
                        Ver Código
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>{design.title}</DialogTitle>
                      </DialogHeader>
                      <CodePreview
                        html={design.html}
                        description={design.description}
                      />
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{design.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
