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
    <footer class="footer items-center p-4 bg-neutral text-neutral-content fixed bottom-0 left-0 right-0">
      <aside class="items-center">
        <p class="">Copyright © 2023 - All right reserved</p>
        <p class="mt-2 font-bold">Lightning Dictionary<br>
        <span class="italic font-normal">A Pro WFM Data Dictionary Visualizer Tool</span></p>
      </aside>
      <nav class="md:place-self-center md:justify-self-end">
        <header class="footer-title opacity-[65%]">Made with <IconHeart class="inline w-auto h-auto text-red-500 align-top"/></header>
        <a href="https://kit.svelte.dev" target="_blank" class="link link-hover">SvelteKit</a>
        <a href="https://tailwindcss.com" target="_blank" class="link link-hover">TailwindCSS</a>
        <a href="https://daisyui.com" target="_blank" class="link link-hover">DaisyUI</a>
        <a href="https://fontsource.org" target="_blank" class="link link-hover">FontSource</a>
      </nav>
    </footer>
</div>

<main>
  <slot />
</main>

<style>
  :global(body) {
    font-family: "Inter Variable", sans-serif;
  }
</style>
