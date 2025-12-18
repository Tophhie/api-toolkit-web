<script lang="ts">
  function goHome() {
    window.location.href = '/';
  }
</script>

<button
  type="button"
  class="dark-mode-toggle"
  onclick={goHome}
  aria-label="Go to home page"
  title="Go to home page"
>
  <i class="fa fa-home fa-lg"></i>
</button>

<style>
  .dark-mode-toggle {
    position: fixed;
    top: 24px;
    left: 24px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 1px solid var(--border-color);
    background-color: var(--content-background-color);
    color: var(--text-color);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    transition: all 0.2s ease;
    z-index: 100;
  }

  .dark-mode-toggle:hover {
    transform: scale(1.1);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }

  .dark-mode-toggle:focus-visible {
    outline: 2px solid var(--link-color);
    outline-offset: 2px;
  }

  @media screen and (max-width: 768px) {
    .dark-mode-toggle {
      top: 16px;
      left: 16px;
      width: 44px;
      height: 44px;
    }
  }
</style>