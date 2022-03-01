<template>
  <b-card-code title="รายชื่อบุคคล" no-body>
    <b-card-body>
      <div class="d-flex justify-content-between flex-wrap align-items-center">
        <div class>
          <b-form-group
            label="Filter"
            label-cols-sm="2"
            label-align-sm="left"
            label-size="sm"
            label-for="filterInput"
            class="mb-0"
          >
            <b-input-group size="sm">
              <b-form-input
                id="filterInput"
                v-model="filter"
                type="search"
                placeholder="Type to Search"
              />
              <b-input-group-append>
                <b-button :disabled="!filter" @click="filter = ''">
                  Clear
                </b-button>
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
        </div>

        <router-link to="/covid19-personal-add">
          <b-button variant="gradient-primary">เพิ่มผู้ใช้งาน </b-button>
        </router-link>
      </div>
    </b-card-body>

    <b-table
      striped
      hover
      responsive
      class="position-relative"
      :per-page="perPage"      
      :current-page="currentPage"
      :items="items"
      :fields="fields"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      :sort-direction="sortDirection"
      :filter="filter"
      :filter-included-fields="filterOn"
      @filtered="onFiltered"
      @row-clicked="myRowClickHandler"
    >
      <template #cell(image)="data">
        <b-avatar
          class="mr-1"
          :src="$store.state.service.urlImage+data.value"
        />
        
      </template>
      <!-- Column: Actions -->
      <template #cell(actions)="">
        <b-dropdown
          variant="link"
          no-caret
          :right="$store.state.appConfig.isRTL"
        >
          <template #button-content>
            <feather-icon
              icon="MoreVerticalIcon"
              size="16"
              class="align-middle text-body"
            />
          </template>         
          <b-dropdown-item>
            <feather-icon icon="EditIcon" />
            <span class="align-middle ml-50">แก้ไข</span>
          </b-dropdown-item>

          <b-dropdown-item >
            <feather-icon icon="TrashIcon" />
            <span class="align-middle ml-50">ลบ</span>
          </b-dropdown-item>
        </b-dropdown>
      </template>
    </b-table>

    <b-card-body class="d-flex justify-content-between flex-wrap pt-0">
      <!-- page length -->
      <b-form-group
        label="Per Page"
        label-cols="6"
        label-align="left"
        label-size="sm"
        label-for="sortBySelect"
        class="text-nowrap mb-md-0 mr-1"
      >
        <b-form-select
          id="perPageSelect"
          v-model="perPage"
          size="sm"
          inline
          :options="pageOptions"
        />
      </b-form-group>

      <!-- pagination -->
      <div>
        <b-pagination
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          first-number
          last-number
          prev-class="prev-item"
          next-class="next-item"
          class="mb-0"
        >
          <template #prev-text>
            <feather-icon icon="ChevronLeftIcon" size="18" />
          </template>
          <template #next-text>
            <feather-icon icon="ChevronRightIcon" size="18" />
          </template>
        </b-pagination>
      </div>
    </b-card-body>

    <template #code>
      {{ codeKitchenSink }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from "@core/components/b-card-code/BCardCode.vue";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import {
  BTable,
  BAvatar,
  BBadge,
  BFormGroup,
  BFormSelect,
  BPagination,
  BInputGroup,
  BFormInput,
  BInputGroupAppend,
  BButton,
  BCardBody,
  BModal,
  VBModal,
  BForm,
  BDropdown,
  BDropdownItem,
} from "bootstrap-vue";
import { codeKitchenSink } from "./code";
import useJwt from "@/auth/jwt/useJwt";
import { required, email } from "@validations";

export default {
  components: {
    BCardCode,
    BTable,
    BAvatar,
    BBadge,
    BForm,
    BFormGroup,
    BFormSelect,
    BPagination,
    BInputGroup,
    BFormInput,
    BInputGroupAppend,
    BButton,
    BCardBody,
    BModal,
    VBModal,

    vSelect,
    BDropdown,
    BDropdownItem,
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      userFrom: {
        username: "",
        password: "",
        email: "",
        firstname: "",
        lastname: "",
        phone: "",
      },
      selected: "User",
      option: ["User", "Admin"],
      perPage: 5,
      pageOptions: [3, 5, 10],
      totalRows: 1,
      currentPage: 1,
      sortBy: "",
      sortDesc: false,
      sortDirection: "asc",
      filter: null,
      filterOn: [],
      users: [],
      infoModal: {
        id: "info-modal",
        title: "",
        content: "",
      },
      fields: [
        { key: "actions" },        
        {
          key: "image",
          label: "รูปประจำตัว",
        },
        {
          key: "cid",
          label: "cid",
        },
        { key: "fullname", label: "ชื่อจริง", sortable: true },
        { key: "id_card", label: "เลขบัตรประชาชน", sortable: true },
        { key: "sex", label: "เพศ", sortable: true },        
        { key: "birthday", label: "วันเกิด" },
        { key: "pttype_name", label: "สิทธ์การรักษา" },
        { key: "mobile", label: "เบอร์โทรศัพท์" },
        { key: "addrpart", label: "ที่อยู่" },
        { key: "tmbpart", label: "ตำบล" },
        { key: "amppart", label: "อำเภอ" },
        { key: "chwpart", label: "จังหวัด" },
        { key: "weight", label: "น้ำหนัก" },
        { key: "height", label: "ส่วนสูง" },
        { key: "bp", label: "ความดัน" },
        { key: "pr", label: "อัตราการหายใจ" },
        { key: "vstdate", label: "vstdate" },
        { key: "dcdate", label: "dcdate" },
        { key: "hospcode", label: "โรงพยาบาลที่รับผิดชอบ" },
        { key: "authen_number", label: "เลข Auth" },
        { key: "line_id", label: "ไอดีไลน์" },
      ],
      /* eslint-disable global-require */
      items: [],
      codeKitchenSink,
    };
  },
  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter((f) => f.sortable)
        .map((f) => ({ text: f.label, value: f.key }));
    },
  },
  mounted() {
    this.getHi();
    this.totalRows = this.items.length;
  },
  methods: {
    myRowClickHandler(record, index){
      this.$router.push(`/covid19-hi-detail/${record.id}`)
    },
    getHi() {
      this.$http
        .get("api/v1/covid/hi", {
          headers: {
            Authorization: `Bearer ${useJwt.getToken()}`,
          },
        })
        .then((res) => {
          this.items = res.data;
          this.totalRows = res.data.length;
        });
    },
    info(item, index, button) {
      this.infoModal.title = `Row index: ${index}`;
      this.infoModal.content = JSON.stringify(item, null, 2);
      this.$root.$emit("bv::show::modal", this.infoModal.id, button);
    },
    resetInfoModal() {
      this.infoModal.title = "";
      this.infoModal.content = "";
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
  },
};
</script>
