<template>
  <b-card-code title="รายชื่อผู้ใช้งาน" no-body>
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
        <b-button variant="gradient-primary" v-b-modal.modal-select2>
          เพิ่มผู้ใช้งาน
        </b-button>
        <b-modal
          id="modal-select2"
          title="เพิ่มผู้ใช้งาน"
          ok-title="เพิ่มผู้ใช้งาน"
          cancel-title="ยกเลิก"
          cancel-variant="outline-secondary"
          @ok="addUser"
        >
          <b-form>
            <b-form-group label="บัญชีผู้ใช้" label-for="name">
              <b-form-input
                id="username"
                v-model="userFrom.username"
                placeholder="กรอกบัญชีผู้ใช้"
              />
            </b-form-group>
            <b-form-group label="รหัสผ่าน" label-for="name">
              <b-form-input
                id="password"
                type="password"
                placeholder="กรอกรหัสผ่าน"
                v-model="userFrom.password"
              />
            </b-form-group>
            <b-form-group label="ชื่อ" label-for="name">
              <b-form-input
                id="firstname"
                v-model="userFrom.firstname"
                placeholder="กรอกชื่อ"
              />
            </b-form-group>
            <b-form-group label="นามสกุล" label-for="name">
              <b-form-input
                id="lastname"
                placeholder="กรอกนามสกุล"
                v-model="userFrom.lastname"
              />
            </b-form-group>
            <b-form-group label="อีเมล" label-for="name">
              <b-form-input
                id="email"
                placeholder="กรอกอีเมล"
                v-model="userFrom.email"
              />
            </b-form-group>
            <b-form-group label="เบอร์โทรศัพท์" label-for="name">
              <b-form-input
                id="phone"
                placeholder="กรอกเบอร์โทรศัพท์"
                v-model="userFrom.phone"
              />
            </b-form-group>
            <b-form-group label="ประเภทผู้ใช้งาน" label-for="vue-select">
              <v-select
                id="vue-select"
                v-model="selected"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                :options="option"
              />
            </b-form-group>
          </b-form>
        </b-modal>
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
    >
      <template #cell(status)="data">
        <b-badge :variant="status[1][data.value]">
          {{ status[0][data.value] }}
        </b-badge>
      </template>
      <!-- Column: Actions -->
      <template #cell(actions)="data">
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
            <feather-icon icon="FileTextIcon" />
            <span class="align-middle ml-50">รายละเอียด</span>
          </b-dropdown-item>

          <b-dropdown-item>
            <feather-icon icon="EditIcon" />
            <span class="align-middle ml-50">แก้ไข</span>
          </b-dropdown-item>

          <b-dropdown-item>
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
import ModelAddUser from "./component/ModelAddUser.vue";
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
    ModelAddUser,
    vSelect,
    BDropdown,
    BDropdownItem,
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
        {
          key: "username",
          label: "บัญชีผู้ใช้",
        },
        { key: "firstname", label: "ชื่อจริง", sortable: true },
        { key: "lastname", label: "นามสกุล", sortable: true },
        "email",
        { key: "actions" },
        // { key: "status", label: "Status", sortable: true },
      ],
      /* eslint-disable global-require */
      items: [],
      /* eslint-disable global-require */
      status: [
        {
          1: "Current",
          2: "Professional",
          3: "Rejected",
          4: "Resigned",
          5: "Applied",
        },
        {
          1: "light-primary",
          2: "light-success",
          3: "light-danger",
          4: "light-warning",
          5: "light-info",
        },
      ],
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
    this.getUser();
    this.totalRows = this.items.length;
  },
  methods: {
    addUser() {
      var data = { ...this.userFrom, role: this.selected };
      this.$http.post("api/v1/auth/register", data).then((res) => {
        this.getUser();
      });
    },
    getUser() {
      this.$http.get("api/v1/auth/users").then((res) => {
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
