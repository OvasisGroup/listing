import TableOfContents from '@/components/general/TocTableOfContents'
import React from 'react'

export default function EditLegalPage() {
  return (
    <div>
        <div className="flex">
      {/* Sidebar */}
      <TableOfContents />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <section id="introduction" className="mb-16">
          <h2 className="text-2xl font-bold mb-2">Introduction</h2>
          <p>This is the introduction section content...</p>
        </section>

        <section id="features" className="mb-16">
          <h2 className="text-2xl font-bold mb-2">Features</h2>
          <p>Here are the features...</p>
        </section>

        <section id="usage" className="mb-16">
          <h2 className="text-2xl font-bold mb-2">Usage</h2>
          <p>Heres how you use the product...</p>
        </section>

        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-bold mb-2">FAQ</h2>
          <p>Common questions and answers...</p>
        </section>
      </div>
    </div>
    </div>
  )
}
