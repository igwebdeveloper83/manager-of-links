<script setup lang="ts">
import { ref } from 'vue';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import LoginForm from './LoginForm.vue';

const activeTab = ref('signin');
</script>

<template>
    <Tabs v-model:value="activeTab">
        <TabList>
            <Tab value="signin">Anmelden</Tab>
            <Tab value="signup">Registrieren</Tab>
        </TabList>
        <TabPanels>
            <TabPanel value="signin" class="text-black"><LoginForm /></TabPanel>
            <TabPanel value="signup" class="text-black">Registrieren(Text)</TabPanel>
        </TabPanels>
    </Tabs>
</template>

<style scoped></style>