<script lang="ts">
    import "../app.css";
    // Supports weights 100-900
    import '@fontsource-variable/inter';
    import IconHeart from '~icons/mdi/heart'
  </script>
  
<svelte:head>
    <title>Lightning Dictionary</title>
</svelte:head>

<header id="top">
  <div class="container mx-auto">
    <!-- Main Navbar -->
    <nav>
      <div class="navbar bg-base-100">
        <div class="flex-1">
          <a class="md:visible md:font-bold" href="/">Lightning Dictionary</a>
        </div>
        <div class="flex-none">
          <div class="form-control">
            <input type="text" placeholder="Search the Data Dictionary" class="input input-bordered input-sm focus:input-accent rounded-md mr-2" />
          </div>
          <ul class="menu menu-horizontal px-1">
            <li><a href="/about">About</a></li>
            <li><a href="/build">Build</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</header>

<div class="relative">
  <footer class="footer p-4 bg-neutral text-neutral-content fixed inset-x-0 bottom-0">
    <div class="flex flex-col md:flex-row justify-between items-center w-full">
      <!-- Left side -->
      <div class="text-center md:text-left mb-4 md:mb-0">
        <p>© 2023 Lightning Dictionary</p>
        <p>A Pro WFM Tool</p>
      </div>
      <!-- Right side -->
      <div class="text-right">
        <p class="flex items-center justify-center md:justify-end">
          Made with <IconHeart class="inline-block w-4 h-4 text-red-500 ml-1" />
        </p>
        <div class="flex gap-1 justify-center md:justify-end">
          <a href="https://kit.svelte.dev" target="_blank" class="link link-hover text-xs">SvelteKit</a>
          <a href="https://tailwindcss.com" target="_blank" class="link link-hover text-xs">TailwindCSS</a>
          <a href="https://daisyui.com" target="_blank" class="link link-hover text-xs">DaisyUI</a>
          <a href="https://fontsource.org" target="_blank" class="link link-hover text-xs">FontSource</a>
        </div>
      </div>
    </div>
  </footer>
</div>

<main>
  <slot />
</main>

<style>
  :global(body) {
    font-family: 'Inter Variable', sans-serif;
  }
</style>
