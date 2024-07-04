export default function Home() {
  return (
    <div className="p-4">
      <b>Welcome to JC Stack</b>
      <p>This will serve as a starting point for your next project or hack</p>
      <br />
      <div>Following are the packages installed with this starter pack</div>
      <ul className="list-inside list-disc">
        <li>Tailwindcss</li>
        <li>Framer Motion</li>
        <li>Recoil</li>
        <li>Next Auth</li>
        <li>Prisma</li>
        <li>Shadcn</li>
      </ul>
      <br />
      <div>
        Workspace for formatting on push and pull to github is configured as
        well
      </div>
      <br />
      <div>Following npm commands are present as well</div>
      <ul className="list-inside list-disc">
        <li>
          <code>npm run lint:check</code> - to check for fix issues
        </li>
        <li>
          <code>npm run lint:fix</code> - to automatically fix linting issues
        </li>
        <li>
          <code>npm run format:check</code> - to check for formatting issues
        </li>
        <li>
          <code>npm run format:fix</code> - to automatically fix formatting
          issues
        </li>
      </ul>
    </div>
  );
}
