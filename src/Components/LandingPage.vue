<script setup>

</script>

<template>
      <v-container max-width="100%">
        <v-row>
            <v-col>
                <v-carousel cycle hide-delimiters> 
                    <v-carousel-item src="/images/carousel1.jpg" cover></v-carousel-item>
                    <v-carousel-item src="/images/carousel2.jpg" cover></v-carousel-item>
                    <v-carousel-item src="/images/carousel3.jpg" cover></v-carousel-item>
                    <v-carousel-item src="/images/carousel4.jpg" cover></v-carousel-item>
                </v-carousel>
            </v-col>
        </v-row>
    </v-container>

    <!-- About us -->
    <v-container max-width="100%">
        <v-row>
            <v-col>
                <v-card align ="center">
                    <v-card-title>MoodBridge Hospital</v-card-title>
                    <v-card-text class="text-body-large">Welcome to MoodBridge Hospital!</v-card-text>
                    <v-card-text class="text-body-large">We are dedicated to providing exceptional healthcare services to our patients. 
                        Our team of experienced medical professionals is committed to delivering personalized care and ensuring the well-being of our community.</v-card-text>
                    <v-card-text class="text-body-large">At MoodBridge Hospital, we prioritize patient comfort and safety.
                        Our state-of-the-art facilities and advanced medical technologies enable us to offer a wide range of healthcare services, from routine check-ups to specialized treatments.</v-card-text>
                    <v-card-text class="text-body-large">We believe in fostering a compassionate and supportive environment for our patients and their families. Our dedicated staff is here to answer your questions, address your concerns, and provide the highest level of care possible.</v-card-text>
                    <v-card-text class="text-body-large">Thank you for choosing MoodBridge Hospital. We look forward to serving you and your loved ones on your journey to better health.</v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>

    <!-- Clinics -->
     <v-container max-width="100%">
        <v-row>
            <v-col md="3">
                <v-card width="300px">
                    <v-img src="/images/Clinic1.jpg"></v-img>
                    <v-card-title>Laboratory</v-card-title>
                    <v-card-text>Clinical service description</v-card-text>
                    <v-btn class="ma-4">Learn more</v-btn>
                </v-card>
            </v-col>

            <v-col md="3">
                <v-card width="300px">
                    <v-img src="/images/Clinic5.jpg"></v-img>
                    <v-card-title>Radiology</v-card-title>
                    <v-card-text>Clinical service description</v-card-text>
                    <v-btn class="ma-4">Learn more</v-btn>
                </v-card>   
            </v-col>

            <v-col md="3">
                <v-card width="300px">
                    <v-img src="/images/Clinic3.jpg"></v-img>
                    <v-card-title>Cardiology</v-card-title>
                    <v-card-text>Clinical service description</v-card-text>
                    <v-btn class="ma-4">Learn more</v-btn>
                </v-card>
            </v-col>

            <v-col md="3">
                <v-card width="300px">
                    <v-img src="/images/Clinic4.jpg"></v-img>
                    <v-card-title>Neurology</v-card-title>
                    <v-card-text>Clinical service description</v-card-text>
                    <v-btn class="ma-4">Learn more</v-btn>
                </v-card>
            </v-col>
        </v-row>
     </v-container>

<!-- Footer -->
 <v-container max-width="100%" class="mt-6 bg-secondary">
    <v-row>
        <v-col md="4">
            <v-card color="secondary" flat>
                <v-card-title>Subscribe to our mailing list</v-card-title>
                <v-card-text>Get the latest new health tips, and hospital updates delivered to your email</v-card-text>
                <v-text-field v-model="inputvalue" label="Email address" outlined class="ma-4">
                    <template v-slot:append-inner>
                        <v-btn color="primary">Subscribe</v-btn>
                    </template>
                </v-text-field>
                <div class="text-center mb-4">
                <p>Follow us on:</p>
                <v-icon icon="mdi-instagram"></v-icon>
                <v-icon icon="mdi-twitter"></v-icon>
                <v-icon icon="mdi-facebook"></v-icon>
                </div>
            </v-card>
        </v-col>
        <v-col md="4">
            <v-card height="300px" color="secondary" flat>
                <v-card-title>Contact information</v-card-title>
                <v-card-text>
                    <p> 
                        <v-icon icon="mdi-map-marker-radius-outline"></v-icon> 
                        MoodBridge Hospital
                    </p>
                    <p> 123, Nairobi, Kenya, 00100</p>
                    <p> 
                        <v-icon icon="mdi-phone-outline"></v-icon> 
                        254725685021
                    </p>
                    <p> 
                        <v-icon icon="mdi-email-outline"></v-icon>
                        info@moodbridgehospital.com
                    </p>
                </v-card-text>
            </v-card>
        </v-col>

          <v-col> 
            <v-card height="300px" color="secondary" flat>
                <v-card-title>Quick links</v-card-title>
                <v-card-text>About us</v-card-text>
                <v-card-text>Clinics</v-card-text>
                <v-card-text>Find a doctor</v-card-text>
                <v-card-text>News and Events</v-card-text>
            </v-card>
        </v-col>
    </v-row>
 </v-container>
</template>
