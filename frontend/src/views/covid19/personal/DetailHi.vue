<template>
  <b-card-code title="" no-body>
    <div class="pl-3 pr-3 pb-2">
      <!-- User Info: Input Fields -->
      <b-form class="">
        <!-- Header: Personal Info -->
        <div class="d-flex">
          <feather-icon icon="UserIcon" size="19" />
          <h4 class="mb-2 ml-50">รายละเอียดข้อมูลส่วนบุคคล Information</h4>
        </div>
        <b-row class="mx-1">
          <b-avatar
            class="mr-3"
            rounded="sm"
            size="120px"
            :src="$store.state.service.urlImage + form.image"
          />

          <div class="demo-inline-spacing">
            <router-link :to="'/covid19-edit-hi/' + uId">
              <b-button variant="gradient-warning">
                <feather-icon icon="EditIcon" class="mr-50" />
                <span class="align-middle">แก้ไขข้อมูล</span>
              </b-button>
            </router-link>
            <b-button variant="gradient-danger" @click="delHi">
              <feather-icon icon="Trash2Icon" class="mr-50" />
              <span class="align-middle">ลบข้อมูล</span>
            </b-button>
          </div>
        </b-row>

        <b-row class="mt-2">
          <!-- Field: Username -->
          <b-col cols="12" md="4">
            <b-form-group label="cid" label-for="cid">
              <b-form-input v-model="form.cid" name="cid" />
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
      uId: "",
      file: "",
      url: null,
      form: {
        cid: "",
        fullname: "",
        id_card: "",
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
    this.uId = this.$route.params.id;
    this.$http.get(`api/v1/covid/hi-by-id/${this.uId}`).then((res) => {
      this.form = res.data;
    });
  },
  methods: {
    delHi() {
      this.$http.delete(`api/v1/covid/hi/${this.uId}`).then((res) => {
        if (res.data.status == 200) {
          this.$swal({
            icon: "success",
            title: "สำเร็จ",
            showConfirmButton: false,
            timer: 1000,
          }).then(() => {
            this.$router.push("/covid19-personal-account");
          });
        } else {
          this.$swal({
            icon: "error",
            title: "ลบข้อมูลไม่สำเร็จ",
            showConfirmButton: false,
            timer: 1000,
          });
        }
      });
    },
  },
};
</script>

<style lang="scss">
@import "@core/scss/vue/libs/vue-flatpicker.scss";
@import "@core/scss/vue/libs/vue-select.scss";
</style>

