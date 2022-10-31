<template>
    <div class="absolute w-full h-full top-0 p-3 z-7">
        <div class="w-full h-full bg-gray-700 rounded-md p-3 flex flex-col gap-2">
            <div>
                <h3 class="text-white text-xl font-medium mb-2">Set your starting life</h3>
                <life-selector
                />
            </div>
            <section class="flex gap-2">
                <article 
                    v-for="player in playersStore.players"
                    :key="player.id"
                    class="w-full bg-white p-4 rounded-md"
                >
                    <h3 class="text-lg font-medium mb-1">
                        {{ player.name }}
                    </h3>
                    <p>
                        {{ player.life }}
                    </p>
                </article>
            </section>
        </div>
    </div>
</template>
<script setup>
    import { watch } from 'vue'
    import { useSettingsStore } from '@/store/settingsStore.js'
    import { usePlayersStore } from '@/store/playersStore.js'
    const settingsStore = useSettingsStore()
    const playersStore = usePlayersStore()

</script>