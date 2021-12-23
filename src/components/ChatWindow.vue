<template>
  <div class="chat-window">
    <div v-if="error">{{ error }}</div>
    <div v-if="documents" class="messages" ref="messages">
      <div v-for="doc in formattedDocuments" :key="doc.id" class="single">
        <span class="created-at">{{ doc.createdAt }}</span>
        <span class="name">{{ doc.name }}</span>
        <span class="message">{{ doc.message }}</span>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
import getCollection from "@/composables/getCollection";
import {formatDistanceToNow} from 'date-fns'
import {computed, onUpdated, ref} from "vue";

export default {
  name: "ChatWindow",
  setup() {
    const {error, documents} = getCollection('messages')

    const formattedDocuments = computed(() => {
      if (documents.value) {
        return documents.value.map(doc => {
          let time = formatDistanceToNow(doc.createdAt.toDate())
          return {...doc, createdAt: time}
        })
      }
    })

    // auto-scroll to bottom messages
    const messages = ref(null)

    onUpdated(() => {
      messages.value.scrollTop = messages.value.scrollHeight
    })

    return {error, documents, formattedDocuments, messages}
  }
}
</script>

<style>
.chat-window {
  background: #fafafa;
  padding: 30px 20px;
}

.single {
  margin: 18px 0;
}

.created-at {
  display: block;
  color: #999;
  font-size: 12px;
  margin-bottom: 4px;
}

.name {
  font-weight: bold;
  margin-right: 6px;
}

.messages {
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: #666 #ddd;
}

@media only screen and (min-width: 768px) {
  .messages {
    max-height: 400px;
  }
}

@media only screen and (max-width: 767px) {
  .messages {
    height: calc(100vh - 236px);
  }
}

.messages::-webkit-scrollbar {
  width: 5px;
  border-radius: 6px;
}

.messages::-webkit-scrollbar-track {
  background: #ddd;
  border-radius: 6px;
}

.messages::-webkit-scrollbar-thumb {
  background: #666;
  border-radius: 6px;
}
</style>
