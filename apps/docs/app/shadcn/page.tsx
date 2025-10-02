import { GitPlatformSync } from '@/registry/new-york/blocks/git-platform-sync/git-platform-sync';
import { DynamicCodeBlock } from 'fumadocs-ui/components/dynamic-codeblock';

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">
          Pierre Shadcn Component Registry
        </h1>
        <p className="text-muted-foreground">
          This custom registry mimics the shadcn registry to allow for the
          distribution of our components using the shadcn tooling.
        </p>
      </header>
      <aside className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold tracking-tight">Installation</h2>
        <h3>Add the pierre registry to your project</h3>
        <DynamicCodeBlock
          lang="jsonc"
          code={`{
  // Additional config
  "registries": {
    "@pierre": "https://pierrejs-docs.vercel.app/r/{name}.json"
    // Additional registries
  }
}`}
        />
      </aside>
      <main className="flex flex-col flex-1 gap-8">
        <h2 className="text-2xl font-bold tracking-tight">
          Available components
        </h2>
        <h2
          id="git-platform-sync"
          className="text-lg font-bold font-mono tracking-tight"
        >
          GitPlatformSync
        </h2>
        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[300px] relative bg-background">
          {/* <div className="flex items-center justify-between">
            <OpenInV0Button name="git-platform-sync" className="w-fit" /> 
          </div> */}
          <div className="flex flex-col items-center justify-center min-h-[280px] relative gap-4">
            <GitPlatformSync />
          </div>
        </div>

        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[300px] relative bg-background">
          Add the component to your project
          <DynamicCodeBlock
            lang="sh"
            code={`npx shadcn@latest add @pierre/git-platform-sync`}
          />
          Import the component from your components alias
          <DynamicCodeBlock
            lang="tsx"
            code={`import { GitPlatformSync } from '@/components/blocks/git-platform-sync';

export function Page() {
  return (
    <div>
      <GitPlatformSync />
    </div>
  );
}
`}
          />
        </div>
      </main>
    </div>
  );
}
