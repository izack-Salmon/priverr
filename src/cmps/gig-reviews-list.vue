<template>
  <section>
    <ul class="review-list">
      <span>
        <li class="review-item">
          <div class="reviewer-image"></div>
          <header>
            <div class="reviewer-details">
              <h5>{{ owner.fullname }}</h5>
              <small>
                <span></span>
                <span></span>
              </small>
            </div>
            <div class="reviewer"></div>
          </header>
          <div class="review-description">
            <p class="text-body-2">
              {{ owner.reviews[0].txt }}
              <!-- Under promise over deliver, will definitely use this contractor
              again. Very artistic very effective! Made my animation better than
              I could even imagine it! -->
            </p>
          </div>
        </li>
      </span>
    </ul>
  </section>
</template>

<script>
export default {
  props: ["owner"],
  created() {},
};
</script>

<style>
</style>