<template>
  <b-card-code title="" no-body>
    <div class="pl-3 pr-3 pb-2">
      <!-- User Info: Input Fields -->
      <b-form class="">
        <!-- Header: Personal Info -->
        <div class="d-flex">
          <feather-icon icon="UserIcon" size="19" />
          <h4 class="mb-2 ml-50">Personal Information</h4>
        </div>
        <b-row class="d-flex align-items-center">
          <b-avatar v-if="url" class="mb-2" size="100px" :src="url" />
          <b-col cols="12" md="4">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroupFileAddon01"
                  >Upload</span
                >
              </div>
              <div class="custom-file">
                <input
                  type="file"
                  v-on:change="onFileChange"
                  class="custom-file-input"
                />
                <label class="custom-file-label" for="inputGroupFile01"
                  >เลือกรูปภาพ</label
                >
              </div>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <!-- Field: Username -->
          <b-col cols="12" md="4">
            <b-form-group label="cid" label-for="cid">
              <b-form-input v-model="form.cid" name="cid"/>
            </b-form-group>
          </b-col>
          <!-- Field: Username -->
          <b-col cols="12" md="4">
            <b-form-group label="ชื่อ-นามสกุล" label-for="fullname">
              <b-form-input v-model="form.fullname" />
            </b-form-group>
          </b-col>

          <!-- Field: Full Name -->
          <b-col cols="12" md="4">
            <b-form-group label="เลขบัตรประชาชน" label-for="full-name">
              <b-form-input v-model="form.id_card" />
            </b-form-group>
          </b-col>

          <b-col cols="12" md="4">
            <b-form-group label="เพศ" label-for="sex">
              <b-form-select v-model="form.sex" :options="ob_sex" />
            </b-form-group>
          </b-col>

          <b-col cols="12" md="4">
            <b-form-group label="วันเกิด" label-for="brithday">
              <flat-pickr
                class="form-control"
                :config="{ dateFormat: 'Y-m-d' }"
                placeholder="YYYY-MM-DD"
                v-model="form.birthday"
              />
            </b-form-group>
          </b-col>

          <b-col cols="12" md="4">
            <b-form-group label="สิทธิการรักษา" label-for="role">
              <v-select
                v-model="form.pttype_name"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                label="title"
                :options="ob_pttype_name"
              />
            </b-form-group>
          </b-col>

          <!-- Field: Email -->
          <b-col cols="12" md="4">
            <b-form-group label="เลขหมายโทรศัพท์" label-for="phone">
              <b-form-input v-model="form.mobile" />
            </b-form-group>
          </b-col>
        </b-row>

        <div class="d-flex mt-2">
          <feather-icon icon="MapPinIcon" size="19" />
          <h4 class="mb-0 ml-50">ที่อยู่รักษา</h4>
        </div>

        <!-- Form: Personal Info Form -->
        <b-row class="mt-1">
          <!-- Field: Postcode -->
          <!-- <b-col cols="12" md="6" lg="4">
            <b-form-group label="รหัสไปรษณีย์">
              <b-form-input type="number" v-model="form.postcode" />
            </b-form-group>
          </b-col> -->
          <b-col cols="12" md="6" lg="4">
            <b-form-group label="บ้านเลขที่ หมู่">
              <b-form-input v-model="form.addrpart" />
            </b-form-group>
          </b-col>
          <!-- Field: Country -->
          <b-col cols="12" md="6" lg="4">
            <b-form-group label="จังหวัด">
              <v-select
                v-model="form.chwpart"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                label="title"
                :options="ob_chwpart"
                @input="fetchAMP"
              />
            </b-form-group>
          </b-col>

          <!-- Field: State -->
          <b-col cols="12" md="6" lg="4">
            <b-form-group label="อำเภอ">
              <v-select
                v-model="form.amppart"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                label="title"
                :disabled="form.chwpart == ''"
                :options="ob_amppart"
                @input="fetchTMB"
              />
            </b-form-group>
          </b-col>

          <!-- Field: City -->
          <b-col cols="12" md="6" lg="4">
            <b-form-group label="ตำบล">
              <v-select
                v-model="form.tmbpart"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                label="title"
                :disabled="form.amppart == ''"
                :options="ob_tmbpart"
              />
            </b-form-group>
          </b-col>
        </b-row>
        <!-- Header: Personal Info -->
        <div class="d-flex mt-2">
          <feather-icon icon="MapPinIcon" size="19" />
          <h4 class="mb-0 ml-50">รายละเอียดร่างกายแรกเข้า</h4>
        </div>

        <!-- Form: Personal Info Form -->
        <b-row class="mt-1">
          <!-- Field: Postcode -->
          <b-col cols="12" md="6" lg="4">
            <b-form-group label="น้ำหนัก(kg)">
              <b-form-input type="number" v-model="form.weight" />
            </b-form-group>
          </b-col>
          <b-col cols="12" md="6" lg="4">
            <b-form-group label="ส่วนสูง(cm)">
              <b-form-input type="number" v-model="form.height" />
            </b-form-group>
          </b-col>

          <!-- Field: City -->
          <b-col cols="12" md="6" lg="4">
            <b-form-group label="ความดัน(ตัวบน/ตัวล่าง)">
              <b-form-input type="number" v-model="form.bp" />
            </b-form-group>
          </b-col>

          <!-- Field: State -->
          <b-col cols="12" md="6" lg="4">
            <b-form-group label="อัตราการหายใจ(ครั้งต่อนาที)">
              <b-form-input type="number" v-model="form.pr" />
            </b-form-group>
          </b-col>

          <!-- Field: Country -->
          <b-col cols="12" md="6" lg="4">
            <b-form-group label="วันที่รับบริการ">
              <flat-pickr
                class="form-control"
                :config="{ dateFormat: 'Y-m-d' }"
                placeholder="YYYY-MM-DD"
                v-model="form.vstdate"
              />
            </b-form-group>
          </b-col>
          <!-- Field: Country -->
          <b-col cols="12" md="6" lg="4">
            <b-form-group label="วันที่จำหน่าย">
              <flat-pickr
                class="form-control"
                :config="{ dateFormat: 'Y-m-d' }"
                placeholder="YYYY-MM-DD"
                v-model="form.dcdate"
              />
            </b-form-group>
          </b-col>
          <!-- Field: Postcode -->
          <b-col cols="12" md="6" lg="4">
            <b-form-group label="หน่วยการบริการที่ดูแล">
              <v-select
                v-model="form.hospcode"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                label="title"
                :options="ob_hospital"
              />
            </b-form-group>
          </b-col>
          <b-col cols="12" md="6" lg="4">
            <b-form-group label="เลข Authen">
              <b-form-input v-model="form.authen_number" />
            </b-form-group>
          </b-col>

          <!-- Field: City -->
          <b-col cols="12" md="6" lg="4">
            <b-form-group label="LineID">
              <b-form-input v-model="form.line_id" />
            </b-form-group>
          </b-col>
        </b-row>

        <b-row class="mt-2">
          <b-col>
            <b-button
              variant="primary"
              class="mb-1 mb-sm-0 mr-0 mr-sm-1"
              :block="$store.getters['app/currentBreakPoint'] === 'xs'"
              @click="handleSubmit"
            >
              Save Changes
            </b-button>
            <b-button
              variant="outline-secondary"
              :block="$store.getters['app/currentBreakPoint'] === 'xs'"
            >
              Reset
            </b-button>
          </b-col>
        </b-row>
      </b-form>
    </div>
  </b-card-code>
</template>

<script>
import BCardCode from "@core/components/b-card-code/BCardCode.vue";
import {
  BRow,
  BCol,
  BForm,
  BFormGroup,
  BFormInput,
  BFormRadioGroup,
  BFormCheckboxGroup,
  BButton,
  BFormFile,
  BAvatar,
  BFormSelect,
} from "bootstrap-vue";
import flatPickr from "vue-flatpickr-component";
import { ref } from "@vue/composition-api";
import vSelect from "vue-select";

export default {
  components: {
    BRow,
    BCol,
    BForm,
    BFormFile,
    BAvatar,
    BFormGroup,
    BCardCode,
    flatPickr,
    BFormInput,
    vSelect,
    BFormRadioGroup,
    BFormCheckboxGroup,
    BButton,
    BFormSelect,
  },
  data() {
    return {
      file: "",
      url: null,
      form: {
        cid: "",
        fullname: "",
        id_card:"",
        sex: "",
        image: "",
        birthday: "",
        pttype_name: "",
        mobile: "",
        addrpart: "",
        tmbpart: "",
        amppart: "",
        chwpart: "",
        weight: "",
        height: "",
        bp: "",
        pr: "",
        vstdate: "",
        dcdate: "",
        hospcode: "",
        authen_number: "",
        line_id: "",
      },
      ob_sex: ["ชาย", "หญิง"],
      ob_tmbpart: [],
      ob_amppart: [],
      ob_chwpart: [],
      ob_pttype_name: [],
      ob_hospital: [],
    };
  },
  mounted() {
    this.$http.get("api/v1/forms/ptt-type").then((res) => {
      res.data.result.forEach((element) => {
        this.ob_pttype_name.push({
          title: element.name,
          value: element.pttype,
        });
      });
    });
    this.$http.get("api/v1/forms/subdistrict").then((res) => {
      res.data.result.forEach((element) => {
        this.ob_tmbpart.push({
          title: element.tambonname,
          value: element.tamboncodefull,
        });
      });
    });
    this.$http.get("api/v1/forms/district").then((res) => {
      res.data.result.forEach((element) => {
        this.ob_amppart.push({
          title: element.ampurname,
          value: element.ampurcodefull,
        });
      });
    });
    this.$http.get("api/v1/forms/province").then((res) => {
      res.data.result.forEach((element) => {
        this.ob_chwpart.push({
          title: element.changwatname,
          value: element.changwatcode,
        });
      });
    });
  },
  methods: {
    onFileChange(e) {
      const file = e.target.files[0];
      this.file = file;
      this.url = URL.createObjectURL(file);
    },
    handleSubmit() {
      let formData = new FormData();
      formData.append("file", this.file);
      formData.append("data", JSON.stringify(this.form));

      this.$http
        .post(`api/v1/covid/hi-add-patient-avatar`, formData)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    },

    async fetchAMP() {      
      await this.$http
        .get(`api/v1/forms/district-by-province/${this.form.chwpart.value}`)
        .then((res) => {
          this.ob_amppart = [];
          res.data.result.forEach((element) => {
            this.ob_amppart.push({
              title: element.ampurname,
              value: element.ampurcodefull,
            });
          });
        });
      await this.$http.get(`api/v1/forms/c_hospital/${this.form.chwpart.value}`).then((res) => {
        res.data.result.forEach((element) => {
          this.ob_hospital.push({
            title: element.hosname,
            value: element.hoscode,
          });
        });
      });
    },
    fetchTMB() {
      this.$http
        .get(`api/v1/forms/subdistrict-by-district/${this.form.amppart.value}`)
        .then((res) => {
          this.ob_tmbpart = [];
          res.data.result.forEach((element) => {
            this.ob_tmbpart.push({
              title: element.tambonname,
              value: element.tamboncodefull,
            });
          });
        });
    },
  },
};
</script>

<style lang="scss">
@import "@core/scss/vue/libs/vue-flatpicker.scss";
@import "@core/scss/vue/libs/vue-select.scss";
</style>

