<template>
    <div class="mac">
        <nav class="nv">
            <h1>Hippotec MAC Resolver</h1>
        </nav>
        <input @keyup.enter="searchMacAddress" v-model="macAddress"
               placeholder="Search MAC address.."
               type="text" name="search">
        <button @click="searchMacAddress"><i class="fa fa-search"></i></button>

        <md-table md-card>
            <md-table-toolbar>
                <h1 class="md-title">Results</h1>
            </md-table-toolbar>

            <md-table-row>
                <md-table-head>MAC Address</md-table-head>
                <md-table-head>Name</md-table-head>
                <md-table-head>Logo</md-table-head>
            </md-table-row>

            <vendor-preview v-for="(vendor,index) in vendors" :key="index" :vendor="vendor"/>

        </md-table>

    </div>
</template>

<script>
    import macService from '../services/macService'
    import vendorPreview from './vendorPreview'
    import Swal from 'sweetalert2'


    export default {
        name: "macResolver",
        data() {
            return {
                macAddress: '',
                vendors: []
            }
        },
        methods: {
            searchMacAddress() {
                macService.getVendor(this.macAddress).then(vendor => {
                    (typeof vendor != "object") ? Swal.fire({
                        type: 'error',
                        title: 'Oops '+vendor,
                    }) : this.vendors.push(vendor);
                    this.macAddress = ''
                }).catch(err => {
                    console.log(err)
                })
            }
        },
        components: {
            vendorPreview

        }
    }
</script>

<style scoped>
    .mac {
        text-align: center;
    }

    .md-table {
        text-align: left;
    }

    nav {
        height: 70px;
        background: #404040;
        margin-bottom: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #c5aa6a;
    }

    h1 {
        margin: 0;
        font-family: "lato";
    }

    input[type=text] {
        padding: 10px;
        font-size: 17px;
        border: 1px solid grey;
        width: 30%;
        background: #f1f1f1;
        margin-bottom: 30px;
    }

    button {
        width: 10%;
        padding: 10px;
        background: #404040;
        color: #c5aa6a;
        font-size: 17px;
        border: 1px solid grey;
        border-left: none; /* Prevent double borders */
        cursor: pointer;
    }

    button:hover {
        background: #748d8e;
    }


</style>