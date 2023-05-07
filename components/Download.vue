<template>
  <div>
    <button @click="downloadFile">{{ name }}</button>
  </div>
</template>

<script>
export default {
  props: {
    filePath: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  methods: {
    downloadFile() {
      // Create a link element with the file's URL
      const link = document.createElement("a");
      link.href = this.filePath;

      // Set the link's download attribute to the file's name
      link.download = this.filePath.split("/").pop();

      // Append the link to the document and click it to initiate the download
      document.body.appendChild(link);
      link.click();

      // Remove the link from the document
      document.body.removeChild(link);
    },
  },
};
</script>
