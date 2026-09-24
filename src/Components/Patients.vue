<script setup>
import {ref} from "vue"

const patients =[
  {
    id: 1,
    firstName: "Joe",
    lastName: "Smith",
    dob: "1990-12-12",
    age: 36,
    phone: "0725685021",
    email: "joesmith@gmail.com",
    nationalId: "12345678",
    residence: "123, Main Street"
  },
  {
    id: 2,
    firstName: "Kelly",
    lastName: "Howard",
    dob: "1995-4-4",
    age: 31,
    phone: "0723567221",
    email: "kellyhoward@gmail.com",
    nationalId: "12345679",
    residence: "125, Jones Town"
  },
  {
     id: 3,
    firstName: "Paul",
    lastName: "Langley",
    dob: "1997-5-5",
    age: 29,
    phone: "0725685023",
    email: "paullangley@gmail.com",
    nationalId: "12345676",
    residence: "124, Apple Place"
  },
  {
     id: 4,
    firstName: "Riley",
    lastName: "Morales",
    dob: "1992-6-6",
    age: 34,
    phone: "0725685028",
    email: "rileymorales@gmail.com",
    nationalId: "12345673",
    residence: "126, Adams Arcade"
  }
]

const showAddDialog = ref(false)

</script>

<template>
  <v-container class="mt-6">
    <v-row>
      <v-col md="10">
        <h1>Patients</h1>
      </v-col>
      <v-col md="2">
        <v-btn class="ma-2" color="secondary" icon="mdi-plus" @click="showAddDialog = true"></v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-table class="border" stripped="even">
          <thead>
            <tr>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Age</th>
            <th>Phone</th>
            <th>Email</th>
            <th>National ID</th>
            <th>Residence</th>
            <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in patients">
              <td>{{ item.firstName + " " + item.lastName}}</td>
              <td>{{ item.dob}}</td>
              <td>{{ item.age}}</td>
              <td>{{ item.phone}}</td>
              <td>{{ item.email}}</td>
              <td>{{ item.nationalId}}</td>
              <td>{{ item.residence}}</td>
            <td>
                <v-btn color="primary" size="small" to="/viewpatient"><v-icon icon="mdi-eye"></v-icon>
                  View
                </v-btn>
            </td>
          </tr>
        </tbody>
       </v-table>
      </v-col>
    </v-row>
  </v-container>

<!-- Add Patient -->
  <v-dialog v-model="showAddDialog" max-width="50%">
    <v-form>
      <v-card class="pa-4">
        <v-row>
          <v-card-text>Add Patient</v-card-text>
          <v-spacer></v-spacer>
           <v-btn class="ma-2" color="secondary" icon="mdi-close" @click="showAddDialog = false"></v-btn>
        </v-row>
        <v-divider class="mb-4" color="primary" opacity=".7" thickness="3" gradient></v-divider>
        <v-row>
          <v-col md="6">
            <v-text-field label="First Name" variant="outlined" prepend-icon="mdi-account-outline"></v-text-field>
          </v-col>
          <v-col md="6">
            <v-text-field label="Last Name" variant="outlined" prepend-icon="mdi-account-outline"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="6">
            <v-date-input label="Date of Birth" variant="outlined" prepend-icon="mdi-calendar-range"></v-date-input>
          </v-col>
          <v-col md="6">
            <v-text-field label="Age" variant="outlined" prepend-icon="mdi-calendar-text"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="6">
            <v-text-field label="Phone" variant="outlined" prepend-icon="mdi-phone"></v-text-field>
          </v-col>
          <v-col md="6">
            <v-text-field label="Email" variant="outlined" prepend-icon="mdi-email"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="6">
            <v-text-field label="National ID" variant="outlined" prepend-icon="mdi-id-card"></v-text-field>
          </v-col>
        </v-row>
          <v-col md="6">
            <v-text-field label="Residence" variant="outlined" prepend-icon="mdi-home-outline"></v-text-field>
          <v-divider class="mb-4" color="primary" opacity=".7" thickness="3" gradient></v-divider>
             <v-row>
              <v-col>
                <v-card-actions>
                  <v-btn color="primary" variant="outlined"> <v-icon icon="mdi-close"></v-icon> Close </v-btn>
                  <v-spacer/>
                  <v-btn color="primary" variant="outlined"> <v-icon icon="mdi-content-save-outline"></v-icon> Save </v-btn>
                </v-card-actions>
              </v-col>
             </v-row>
          </v-col>
      </v-card>
    </v-form>
  </v-dialog>
</template>