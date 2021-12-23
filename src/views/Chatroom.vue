<template>
  <div class="container">
    <Navbar/>
    <ChatWindow/>
    <NewChatForm/>
  </div>
</template>

<script>

import NewChatForm from "@/components/NewChatForm";
import Navbar from "@/components/Navbar";
import getUser from "@/composables/getUser";
import {watch} from "vue";
import {useRouter} from 'vue-router';
import ChatWindow from "@/components/ChatWindow";

export default {
  name: "Chatroom",
  components: {ChatWindow, Navbar, NewChatForm},
  setup() {
    const {user} = getUser()
    const router = useRouter()

    watch(user, () => {
      if (!user.value) {
        router.push({name: 'Welcome'})
      }
    })
  }
}
</script>

<style scoped>

</style>
