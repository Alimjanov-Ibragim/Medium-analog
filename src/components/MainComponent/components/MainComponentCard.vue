<template>
  <div>
    <div v-for="(post, key) in pageOfItems" :key="key" class="card">
      <header class="card-header">
        <p class="card-header-title">
          <span class="title is-4">{{ post.title }}</span>
        </p>
        <button
          v-if="$store.state.user.user.role != 'writer'"
          class="claps"
          @click="incrementClaps(post)"
        >
          {{ post.claps }}
          <svg width="29" height="29">
            <g fill-rule="evenodd">
              <path
                d="M13.74 1l.76 2.97.76-2.97zM16.82 4.78l1.84-2.56-1.43-.47zM10.38 2.22l1.84 2.56-.41-3.03zM22.38 22.62a5.11 5.11 0 0 1-3.16 1.61l.49-.45c2.88-2.89 3.45-5.98 1.69-9.21l-1.1-1.94-.96-2.02c-.31-.67-.23-1.18.25-1.55a.84.84 0 0 1 .66-.16c.34.05.66.28.88.6l2.85 5.02c1.18 1.97 1.38 5.12-1.6 8.1M9.1 22.1l-5.02-5.02a1 1 0 0 1 .7-1.7 1 1 0 0 1 .72.3l2.6 2.6a.44.44 0 0 0 .63-.62L6.1 15.04l-1.75-1.75a1 1 0 1 1 1.41-1.41l4.15 4.15a.44.44 0 0 0 .63 0 .44.44 0 0 0 0-.62L6.4 11.26l-1.18-1.18a1 1 0 0 1 0-1.4 1.02 1.02 0 0 1 1.41 0l1.18 1.16L11.96 14a.44.44 0 0 0 .62 0 .44.44 0 0 0 0-.63L8.43 9.22a.99.99 0 0 1-.3-.7.99.99 0 0 1 .3-.7 1 1 0 0 1 1.41 0l7 6.98a.44.44 0 0 0 .7-.5l-1.35-2.85c-.31-.68-.23-1.19.25-1.56a.85.85 0 0 1 .66-.16c.34.06.66.28.88.6L20.63 15c1.57 2.88 1.07 5.54-1.55 8.16a5.62 5.62 0 0 1-5.06 1.65 9.35 9.35 0 0 1-4.93-2.72zM13 6.98l2.56 2.56c-.5.6-.56 1.41-.15 2.28l.26.56-4.25-4.25a.98.98 0 0 1-.12-.45 1 1 0 0 1 .29-.7 1.02 1.02 0 0 1 1.41 0zm8.89 2.06c-.38-.56-.9-.92-1.49-1.01a1.74 1.74 0 0 0-1.34.33c-.38.29-.61.65-.71 1.06a2.1 2.1 0 0 0-1.1-.56 1.78 1.78 0 0 0-.99.13l-2.64-2.64a1.88 1.88 0 0 0-2.65 0 1.86 1.86 0 0 0-.48.85 1.89 1.89 0 0 0-2.67-.01 1.87 1.87 0 0 0-.5.9c-.76-.75-2-.75-2.7-.04a1.88 1.88 0 0 0 0 2.66c-.3.12-.61.29-.87.55a1.88 1.88 0 0 0 0 2.66l.62.62a1.88 1.88 0 0 0-.9 3.16l5.01 5.02c1.6 1.6 3.52 2.64 5.4 2.96a7.16 7.16 0 0 0 1.18.1c1.03 0 2-.25 2.9-.7A5.9 5.9 0 0 0 23 23.24c3.34-3.34 3.08-6.93 1.74-9.17l-2.87-5.04z"
              ></path>
            </g>
          </svg>
        </button>
      </header>
      <div class="content">
        {{ post.description }}
        <br />
      </div>
      <footer
        v-if="$store.state.user.user.role != 'reader'"
        class="card-footer"
      >
        <a class="card-footer-item button is-success" @click="choosePost(post)">
          Редактировать
        </a>
        <a
          href="#"
          class="card-footer-item button is-danger"
          @click="delelePost(post)"
        >
          Удалить
        </a>
      </footer>
    </div>
    <div class="card-footer pagination" v-show="posts.length > 10">
      <jw-pagination :items="posts" @changePage="onChangePage"></jw-pagination>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "MainComponentCard",
  data() {
    return {
      pageOfItems: []
    };
  },
  methods: {
    onChangePage(pageOfItems) {
      // update page of items
      this.pageOfItems = pageOfItems;
    },
    choosePost(post) {
      this.$router.push({ name: "MainComponentEdit", params: { id: post.id } });
    },
    delelePost(post) {
      this.$store.dispatch("post/removePost", post);
    },
    incrementClaps(post) {
      this.$store.dispatch("post/incrementClaps", post);
    }
  },
  computed: {
    ...mapState({
      posts: state => state.post.posts
    })
  }
};
</script>

<style>
.card-header-title {
  flex-direction: column;
  padding-right: 60px;
}
.card {
  margin-bottom: 20px;
  border-radius: 4px;
}
.content {
  padding: 10px;
  margin: 0;
}
.claps {
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
  border: none;
  background: none;
  outline: none;
}
.card-footer-item.button {
  border: none;
}
.card-footer-item.button:first-child {
  border-radius: 0 0 0 4px;
}
.card-footer-item.button:last-child {
  border-radius: 0 0 4px 0;
}
.card-footer.pagination {
  justify-content: center;
}
.page-link {
  background: #fff;
  border-radius: 4px;
  border: 1px solid #fff;
  color: #363636;
  font-size: 1em;
  justify-content: center;
  margin: 0.25rem;
  padding-left: 0.5em;
  padding-right: 0.5em;
  text-align: center;
  transition: all 0.3s;
}
.page-link:hover {
  background: #dbdbdb;
}
.page-number.active .page-link {
  background: #23d160;
  color: #ffffff;
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  border: none;
}
.page-number.active .page-link:hover {
  background: #3db969;
}
@media (max-width: 480px) {
  .page-item:not(.page-number) .page-link {
    padding: 6px !important;
  }
  .page-link {
    font-size: 11px;
  }
}
@media (max-width: 320px) {
  .page-item.first,
  .page-item.last {
    display: none !important;
  }
}
</style>
