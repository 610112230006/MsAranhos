<template>
  <b-card-code title="เลือกไฟล์ Excel REP จาก สปสช. ที่ต้องการนำเข้า">
    <b-card-text>
      ไฟล์ Excel รูปแบบไฟล์ต้องเป็นแบบเดียวกันกับ สปสช. ทุกประการ
    </b-card-text>

    <div>

      <!-- Styled -->
      <b-form-file
        v-model="file"
        placeholder="Choose a file or drop it here..."
        drop-placeholder="Drop file here..."
      />

      <b-card-text class="my-1">
        Selected file: <strong>{{ file ? file.name : '' }}</strong>
      </b-card-text>

      <b-card-text>
        <span>You can have </span>
        <code>&lt;b-form-file&gt;</code>
        <span> render a browser native file input by setting the </span>
        <code>plain</code>
        <span> prop.</span>
      </b-card-text>

      <!-- Plain mode -->
      <b-form-file
        v-model="file2"
        class="mt-1"
        plain
      />
      <div class="mt-1">
        Selected file: <strong>{{ file2 ? file2.name : '' }}</strong>
      </div>
    </div>

    <template #code>
      {{ codeBasic }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormFile, BCardText } from 'bootstrap-vue'
import { codeBasic } from './code'

export default {
  components: {
    BCardCode,
    BCardText,
    BFormFile,
  },
  data() {
    return {
      file: null,
      file2: null,
      codeBasic,
    }
  },
}
</script>
