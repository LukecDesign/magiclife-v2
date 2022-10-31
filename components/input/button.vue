<template>
    <button
        :class="
        primary ? 'bg-green-400 border-transparent hover:bg-green-600 active:bg-green-800 text-white' 
        : 'bg-transparent text-green-700 border-green-400 hover:border-green-600 active:border-green-800'"
        class="px-3 py-2 text-gray-700 rounded-md border ease-out duration-75"
    >
        {{ label }}
    </button>
</template>
<script setup>
const props = defineProps({
    primary: {
        type: Boolean,
        defualt: false
    },
    label: {
        type: String,
        default: 'Click here'
    }
})

</script>