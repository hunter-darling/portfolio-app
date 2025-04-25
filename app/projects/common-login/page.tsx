import Link from 'next/link';

export default function CommonLoginAbout() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl mt-16">
      <div className="mb-8">
        <Link 
          href="/projects" 
          className="inline-flex text-secondary-foreground px-4 py-2 rounded-md hover:bg-primary/20 transition-colors outline outline-secondary-foreground/20"
        >
          Back to Projects
        </Link>
      </div>

      <article className="prose prose-invert max-w-none">
        <h1 className="text-3xl font-bold mb-6">About Common Sign-In Page</h1>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Overview</h2>
        <p>
          The Common Sign-In Page is a critical component of General Motors&apos; web services infrastructure, 
          serving as the primary authentication gateway across multiple GM web applications. This project 
          involved modernizing and enhancing a legacy vanilla JavaScript implementation into a robust, 
          componentized Angular application. The major brands of GM (Chevrolet, GMC, Buick, and Cadillac) 
          use this single sign-in page to authenticate users.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Key Features</h2>

        <h3 className="text-xl font-semibold mt-6 mb-3">Technical Improvements</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Migration from vanilla JavaScript to Angular framework</li>
          <li>Implementation of component-based architecture</li>
          <li>Enhanced extensibility and customization capabilities</li>
          <li>Improved maintainability and code organization</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Customization Features</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Dynamic UI loading capabilities</li>
          <li>Team, brand, and region-specific customization options</li>
          <li>Flexible theming and styling (e.g. images, fonts, colors, etc.)</li>
          <li>Customizable user experience (redirect URLs)</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Impact</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Improved user experience across multiple GM web services</li>
          <li>Reduced development time for teams implementing authentication</li>
          <li>Enhanced security through standardized authentication practices</li>
          <li>Better maintainability and reduced technical debt</li>
          <li>Increased flexibility for future enhancements</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Technical Architecture</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Frontend: Angular</li>
          <li>Component Architecture: Angular Components</li>
          <li>Styling: Custom GM Proprietary Library</li>
        </ul>

      </article>
    </div>
  );
}
