<template>
  <div class="dev-dets">
    <img class="d-mobile img" :src="getProfile.avatar_url" alt="user" />
    <div class='inner-flex'>
      <div class="d-flex">
        <img class="d-desktop" :src="getProfile.avatar_url" alt="user" />
        <div class="user"> 
          <div class="desktop-flex">
            <div>
              <p class="title">{{getProfile.name}}</p>
              <a :href="getProfile.html_url" target="_blank" class="link">@{{getProfile.login}}</a>
            </div>
            <p>Joined {{formatDate(getProfile.created_at)}}</p>
          </div>
        </div>
      </div>
      <div class='bio' :class="{unavailable : !getProfile.bio}">
        <p>{{getProfile.bio ? getProfile.bio : 'This profile has no bio'}}</p>
      </div>
      <div class='stats d-flex'>
        <div class="stat">
          <p>Repos</p>
          <p>{{getProfile.public_repos}}</p>
        </div>
        <div class="stat">
          <p>Followers</p>
          <p>{{getProfile.followers}}</p>
        </div>
        <div class="stat">
          <p>Following</p>
          <p>{{getProfile.following}}</p>
        </div>
      </div>
      <div class='icons'>
        <p :class="{unavailable : !getProfile.location }"><span class="mdi mdi-map-marker"></span> {{getProfile.location ? getProfile.location : "Not available"}}</p>
        <p :class="{unavailable : !getProfile.blog }"><span class="mdi mdi-link-variant"></span> <a :href="getProfile.blog" target="_blank">{{getProfile.blog ? getProfile.blog : "Not availale"}}</a></p>
        <p :class="{unavailable : !getProfile.twitter_username }"><span class="mdi mdi-twitter"></span> <a :href="appendLink(getProfile.twitter_username)" target="_blank">{{getProfile.twitter_username ? appendAt(getProfile.twitter_username) : "Not available"}}</a></p>
        <p :class="{unavailable : !getProfile.company }"><span class="mdi mdi-domain"></span> <a :href="appendLink(getProfile.company)" target="_blank">{{getProfile.company ? getProfile.company : "Not available"}}</a></p>
      </div>
    </div> 
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import moment from 'moment'
export default {
  name: 'devDetails',
  data() {
    return {
      link: 'https://twitter.com'
    }
  },
  methods: {
    formatDate(date) {
      return moment(date).format("D MMM YYYY")
    },
    appendLink(link) {
      return 'https://twitter.com/' + link;
    },
    appendAt(at) {
      return '@' + at;
    }
  },
  computed: {
    ...mapGetters(['getProfile']),
  }
}
</script>
<style lang="scss" scoped>
.unavailable {
  color: hsl(223, 10%, 60%);
}
.dev-dets {
  background: var(--card-bg);
  border-radius: 10px;
  color: var(--text);
  padding: 1.7rem;
  margin: 0.2rem 0.2rem 2rem 0.2rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -100px, rgba(0, 0, 0, 0.3) 0px 30px 60px -60px;
  img {
    width: 70px;
    border-radius: 50%;
    flex-basis: 20%;
    border: solid 2px var(--link);
  }
  a.link {
    text-decoration: none;
    color: var(--link);
    &:hover {
      opacity: 0.8;
    }
  }
  p {
    padding: 0.2rem 0;
  }
  p.title {
    color: var(--text-title);
    font-weight: bolder;
  }
  p.unav {
    color: var(--unavailable);
  }
  .user {
    flex-basis: 80%;
    margin-left: 1rem;
  }
  .bio {
    margin: 1rem 0;
  }
}
.stats {
  background: var(--body-bg);
  border-radius: 10px;
  padding: 1rem;
  .stat { 
    text-align: center;
    & p {
      font-weight: lighter;
    }
    & p:nth-child(2) {
      font-weight: bolder;
      padding-top: 0.5rem;
    }
  }
}
.icons {
  margin: 1rem 0 0;
  color: var(--font);
  & a {
    text-decoration: none;
    color: var(--font);
    transition: opacity 0.4s ease;
    &:hover {
      opacity: 0.8;
    }
  }
  & p {
    padding: 0.5rem 0;
    display: flex;
    align-items: center;
    transition: opacity 0.4s ease;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
    & span {
      margin-right: 0.7rem;
      font-size: 20px;
    }
  }
}
.d-desktop {
  display: block;
}
.d-mobile{
  display: none;
}
@media screen and (min-width: 700px) {
  .stats {
    .stat {
      text-align: left;
    }
  }
  .icons {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 1rem;
    & p {
      flex-basis: 50%;
    }
  }
}
@media screen and (min-width: 1000px) {
  .dev-dets {
    display: flex;
    justify-content: space-between;
    align-items: start;
    .user {
      margin-left: 0;
      flex-basis: 100%;
    }
    & .img {
      flex-basis: 20%;
    }
    & .inner-flex {
      flex-basis: 80%;
      margin-left: 1rem;
    }
  }
  .desktop-flex {
    display: flex;
    justify-content: space-between;
    align-items: start;
  }
  .d-desktop {
    display: none;
  }
  .d-mobile{
    display: flex;
  }
}
</style>