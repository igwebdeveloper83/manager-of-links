<script setup lang="ts">
import { ref } from 'vue';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';

const activeTab = ref('signin');
</script>

<template>
    <Tabs v-model:value="activeTab">
        <TabList>
            <Tab value="signin">Anmelden</Tab>
            <Tab value="signup">Registrieren</Tab>
        </TabList>
        <TabPanels>
            <TabPanel value="signin" class="text-black">Anmelden(Text)</TabPanel>
            <TabPanel value="signup" class="text-black">Registrieren(Text)</TabPanel>
        </TabPanels>
    </Tabs>
</template>

<style scoped>
:deep(.p-tabs) {
    background-color: transparent !important;
}

:deep(.p-tablist) {
    background-color: transparent !important;
}

:deep(.p-tabpanels) {
    background-color: transparent !important;
}

:deep(.p-tabpanel) {
    background-color: transparent !important;
}
</style>