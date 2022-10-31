<template>
    <button 
        class="group fixed origin-center bottom-5 right-1/2 z-999 w-12 h-12 p-3 bg-green-300 rounded-full hover:bg-green-300 active:bg-green-400 ease-in duration-75"
        @click="toggleSettings"
    >
        <Cog6ToothIcon
            class="text-gray-700 group-hover:scale-105 group-hover:text-gray-800 group-active:scale-95 ease-in duration-75"
        />
    </button>
</template>
<script setup>
    import { useSettingsStore } from '@/store/settingsStore.js'
    import { Cog6ToothIcon } from '@heroicons/vue/24/outline'
    const settingsStore = useSettingsStore()

    function toggleSettings() {
        settingsStore.toggleSettings()
    }
</script>