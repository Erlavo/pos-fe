<template>
  <div
    class="flex w-full flex-col lg:flex-row place-items-center justify-items-center bg-slate-500"
  >
    <div class="card grid flex-grow place-items-center h-screen text-white">
      <h3 class="text-3xl mt-auto">I just make this Pages</h3>
      <ul class="mb-auto mt-3">
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/register">Register</a>
        </li>
      </ul>
    </div>
    <div class="card grid flex-grow place-items-center">
      <div class="grid grid-cols-1 gap-2">
        <button class="btn btn-primary">Color Primary</button>
        <button class="btn btn-secondary">Color Secondary</button>
        <button class="btn btn-accent">Color Accent</button>
        <button class="btn btn-neutral">Color Neutral</button>
        <div class="divider"></div>
        <button class="btn btn-info">Color Info</button>
        <button class="btn btn-success">Color Success</button>
        <button class="btn btn-warning">Color Warning</button>
        <button class="btn btn-error">Color Error</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
