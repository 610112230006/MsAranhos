<template>
  <b-card-code title="เลือกไฟล์ Excel STATMENT จาก สปสช. ที่ต้องการนำเข้า">
    <b-card-text>
      ไฟล์ Excel รูปแบบไฟล์ต้องเป็นแบบเดียวกันกับ สปสช. ทุกประการ
    </b-card-text>
    <div>
      <!-- Styled -->
      <b-form-file
        v-model="file"
        type="file"
        ref="file"
        @change="handleFileUpload($event)"
        placeholder="Choose a file or drop it here..."
        drop-placeholder="Drop file here..."
      />

      <b-card-text class="my-1">
        ไฟล์ที่เลือก : <strong>{{ file ? file.name : "" }}</strong>
      </b-card-text>
      <b-button variant="primary" v-on:click="submitFile()"> อัพโหลด </b-button>
      <!-- <b-button variant="primary" v-on:click="$store.dispatch('verticalMenu/getRole');"> อัพโหลด </b-button> -->
    </div>
  </b-card-code>
</template>

<script>
import BCardCode from "@core/components/b-card-code";
import { BFormFile, BCardText, BButton } from "bootstrap-vue";
import { XlsxRead, XlsxJson } from "vue-xlsx/dist/vue-xlsx.es.js"


export default {
  components: {
    BCardCode,
    BCardText,
    BFormFile,
    BButton,
    XlsxRead,
    XlsxJson,
  },
  data() {
    return {
      file: null,
    };
  },
  mounted() {
    
  },
  methods: {
    submitFile() {
      this.$store.dispatch('verticalMenu/getRole');
      console.log(this.$store.state.verticalMenu.mainMenu)
      // let formData = new FormData();

      // formData.append("file", this.file);
      // this.$http
      //   .post("/import/statment-excel", formData, {
      //     headers: {
      //       "Content-Type": "multipart/form-data",
      //     },
      //   })
      //   .then( (res)=> {
      //     console.log(res.data);
      //   })
      //   .catch((err)=> {
      //     console.log(err);
      //   });

     
    },
    handleFileUpload(event) {
      this.file = event.target.files[0];
    },
  },
};
</script>
