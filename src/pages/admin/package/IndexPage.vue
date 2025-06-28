<template>
  <q-page padding class="q-pd-ma">
    <div>
      <q-table class="shadow-5 rounded-borders" :columns="columns" :rows="rows" row-key="name">
        <template v-slot:top>
          <div class="q-table__title">Package</div>
          <q-space />
          <q-btn color="green" icon="add" :label="t('add_new')" @click="showDialog = true" />
        </template>
        <template v-slot:body-cell-actions="props">
          <q-td :props="props" class="tw:space-x-4">
            <q-btn color="green" dense flat round icon="edit" @click="onEdit(props.row)" />
            <span class="tw:w-10"></span>
            <q-btn color="red" dense flat round icon="cancel" @click="onEdit(props.row)" />
          </q-td>
        </template>
      </q-table>
    </div>
    <q-dialog v-model="showDialog" persistent>
      <q-card class="q-dialog-plugin" style="border-radius: 0.5rem">
        <q-card-section>
          <div class="flex">
            <div class="text-h6 q-mb-md">Package</div>
            <q-space></q-space>
            <div>
              <q-btn
                class="q-ml-auto"
                color="red"
                icon="close"
                flat
                round
                @click="showDialog = false"
              />
            </div>
          </div>
        </q-card-section>
        <q-card-section class="q-pt-none tw:grid tw:grid-row-2 tw:gap-4">
          <q-input
            outlined
            style="border-radius: 1rem"
            v-model="package_model.name"
            :label="t('package_name')"
          />
          <q-input
            outlined
            style="border-radius: 1rem"
            v-model="package_model.limitUser"
            :label="t('package_limit_user')"
            type="number"
          />
          <q-input
            outlined
            style="border-radius: 1rem"
            v-model="package_model.limitBill"
            :label="t('package_limit_bill')"
            type="number"
          />
          <q-input
            outlined
            style="border-radius: 1rem"
            v-model="package_model.limitDay"
            :label="t('package_limit_date')"
            type="number"
          />
          <q-input
            outlined
            style="border-radius: 1rem"
            v-model="package_model.price"
            :label="t('package_price')"
            type="number"
          />
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat :label="t('cancel')" color="red" @click="showDialog = false" />
          <q-btn flat :label="t('save')" color="green" @click="$emit('save', package_model)" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { formatNum } from 'src/utils/num-format';
import { formatDate } from 'src/utils/date-format';
import type { PlansModel } from 'src/models/package-model';
import { ref } from 'vue';
import type { QTableColumn } from 'quasar';

const { t } = useI18n();
const showDialog = ref(false);
const package_model = ref(<PlansModel>{});
const rows = ref<PlansModel[]>(<PlansModel[]>[
  {
    id: 1,
    name: 'Free Bussiness',
    limitUser: 5,
    limitBill: 100000,
    limitDay: 30,
    price: 10000,
    createdAt: Date.now(),
  },
  {
    id: 1,
    name: 'Small Bussiness',
    limitUser: 5,
    limitBill: 100000,
    limitDay: 30,
    price: 10000,
    createdAt: Date.now(),
  },
  {
    id: 1,
    name: 'Small Bussiness',
    limitUser: 5,
    limitBill: 100000,
    limitDay: 30,
    price: 10000,
    createdAt: Date.now(),
  },
  {
    id: 1,
    name: 'Small Bussiness',
    limitUser: 5,
    limitBill: 100000,
    limitDay: 30,
    price: 10000,
    createdAt: Date.now(),
  },
]);
const columns: QTableColumn[] = [
  {
    name: 'name',
    required: true,
    label: t('package_name'),
    align: 'left',
    field: 'name',
    sortable: true,
  },
  {
    name: 'limitUser',
    label: t('package_limit_user'),
    align: 'center',
    field: 'limitUser',
    format: (val: number) => formatNum(val),
  },
  {
    name: 'limitBill',
    label: t('package_limit_bill'),
    align: 'left',
    field: 'limitBill',
    format: (val: number) => formatNum(val, t('bill')),
  },
  {
    name: 'limitDay',
    label: t('package_limit_date'),
    align: 'left',
    field: 'limitDay',
    format: (val: number) => formatNum(val, t('day')),
  },
  {
    name: 'price',
    label: t('package_price'),
    align: 'left',
    field: 'price',
    format: (val: number) => formatNum(val, 'LAK'),
  },
  {
    name: 'createdAt',
    label: t('created_at'),
    align: 'left',
    field: 'createdAt',
    format: (val: number) => formatDate(val, 'DD-MM-YYYY hh:mm A'),
  },
  {
    name: 'updatedAt',
    label: t('updated_at'),
    align: 'left',
    field: 'updatedAt',
    format: (val: number) => formatDate(val),
  },
  {
    name: 'actions',
    label: t('actions'),
    field: 'actions',
    align: 'center',
  },
];

/** Funtions */
// function onAdd(val: PlansModel) {}

function onEdit(val: PlansModel) {
  console.log(val);
}
</script>
