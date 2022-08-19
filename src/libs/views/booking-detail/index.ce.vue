<template>
  <div
    style="
      display: grid;
      grid-template-columns: 8fr 4fr;
      max-width: 1200px;
      margin: 0 auto;
    "
  >
    <div style="display: flex; flex-direction: column; gap: 24px">
      <ma-login-banner login-url="https://misteraladin.com"></ma-login-banner>
      <ma-card>
        <span slot="header">Detail Pemesan</span>
        <div style="display: flex; flex-direction: column; gap: 24px">
          <div
            style="
              display: grid;
              grid-template-columns: min-content repeat(3, 1fr);
              gap: 24px;
            "
          >
            <!-- <ma-input-group>
              <label for="first-name">Title</label>
              <ma-dropdown
                :options="JSON.stringify(['Tuan', 'Nyonya', 'Nona'])"
              />
            </ma-input-group> -->
            <ma-input-group>
              <label for="first-name">Nama Depan</label>
              <ma-input
                type="text"
                class="hello-there hello-all"
                name="first-name"
              ></ma-input>
            </ma-input-group>
            <ma-input-group>
              <label for="first-name">Nama Tengah</label>
              <ma-input
                type="text"
                class="hello-there hello-all"
                name="first-name"
              ></ma-input>
            </ma-input-group>
            <ma-input-group>
              <label for="first-name">Nama Belakang</label>
              <ma-input
                type="text"
                class="hello-there hello-all"
                name="first-name"
              ></ma-input>
            </ma-input-group>
          </div>
          <ul style="display: flex; flex-direction: column; gap: 8px">
            <li
              style="
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 500;
                font-size: 12px;
                line-height: 16px;
                color: #757575;
                margin-left: 16px;
              "
            >
              Untuk WNI, nama dan NIK harus sama dengan yang terdaftar. Untuk
              WNA, gunakan nama dan nomor yang tercantum di paspor. Untuk WNA ,
              gunakan nama dan nomor vang tercantum di paspor.
            </li>
            <li
              style="
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 500;
                font-size: 12px;
                line-height: 16px;
                color: #757575;
                margin-left: 16px;
              "
            >
              Jika kamu tidak memiliki "nama tengah" (contoh: Ari Wibowo),
              kosongkan bagian nama tengah dan hanya isi nama depan (contoh:
              Ari) dan nama akhir (contoh: Wibowo)
            </li>
            <li
              style="
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 500;
                font-size: 12px;
                line-height: 16px;
                color: #757575;
                margin-left: 16px;
              "
            >
              Jika kamu hanya memiliki satu nama (contoh: Kartini), harap
              mengosongkan nama tengah dan mengisi nama belakang dengan nama
              depan (contoh: Kartini Kartini).
            </li>
          </ul>

          <ma-input-group>
            <label for="first-name">Nomor Telepon</label>
            <ma-dropdown
              :options="JSON.stringify(data.country.Data)"
              code="CodeTelp"
              label="CodeTelp"
              as-icon="Image"
              data-group="prepend"
            />
            <ma-input
              type="text"
              class="hello-there hello-all"
              name="first-name"
              placeholder="81234567890"
              data-group="primary"
            ></ma-input>
          </ma-input-group>

          <ma-input-group>
            <label for="first-name">Email</label>
            <ma-input
              type="text"
              class="hello-there hello-all"
              name="first-name"
              placeholder="email@domain.com"
            ></ma-input>
          </ma-input-group>
        </div>
      </ma-card>
      <ma-card>
        <span slot="header">Detail Penumpang</span>
        <div slot="header">
          <ma-switcher>sama seperti pemesan</ma-switcher>
        </div>
      </ma-card>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['data']);

console.log(JSON.parse(props.data));
const data = JSON.parse(props.data);
</script>

<style lang="scss">
@use '../../../styles/global';
@use '../../../styles/functions';
@use '../../../styles/colors';
</style>
