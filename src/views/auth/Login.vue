<template>
  <div class="hero h-screen">
    <div class="hero-overlay bg-opacity-30"></div>
    <div class="card bg-primary w-1/3 shrink-0 shadow-2xl me-96">
      <form class="card-body text-white">
        <h1 class="font-bold text-5xl">Log In</h1>
        <p class="mb-10">Please enter your detail login</p>
        <div class="form-control">
          <input
            type="email"
            placeholder="Email"
            class="input input-bordered"
            required
          />
        </div>
        <div class="form-control">
          <label class="input input-bordered flex items-center gap-2">
            <input type="password" class="grow" placeholder="Password" />
            <label class="swap">
              <input type="checkbox" />
              <font-awesome-icon icon="fa-solid fa-eye" class="swap-off" />
              <font-awesome-icon icon="fa-solid fa-eye-slash" class="swap-on" />
            </label>
          </label>
          <label class="label">
            <a href="#" class="label-text-alt link link-hover text-sm">
              Forgot password?
            </a>
          </label>
        </div>
        <div class="flex gap-2 justify-between mt-6">
          <button class="btn btn-neutral">Login</button>
          <a href="/" class="btn btn-secondary">Back to Home</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
input {
  color: black;
}
.hero {
  background-image: url(https://plus.unsplash.com/premium_photo-1711684803664-1560add8aa80);
}
</style>
