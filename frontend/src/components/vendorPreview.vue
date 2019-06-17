<template>
    <md-table-row>
        <md-table-cell>{{vendor.macAddress}}</md-table-cell>
        <md-table-cell>{{vendor.name}}</md-table-cell>
        <md-table-cell><img style="width:50px" :src=logo alt=""></md-table-cell>
    </md-table-row>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "vendorPreview",
        props: {vendor: {type: Object, required: true}},
        data() {
            return {
                defaultLogo: './img/1.jpg',
                logo: this.checkLogoSrc()
            }
        },
        methods: {
            checkLogoSrc() {
                axios.get(this.vendor.logo)
                    .then(res => {
                        this.logo = res.config.url
                    }, reason => {
                        this.logo = this.defaultLogo;
                    })
            }

        }
    }
</script>

<style scoped>

</style>