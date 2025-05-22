import { onMounted, ref } from "vue"
// import { Blockfrost, Lucid } from "lucid-cardano"

export const useCip30Wallets = () => {

    const lucid = ref<Lucid | null>(null)
    const connectedAddress = ref<string | null>(null)
    const availableWallets = ref<{ key: string, name: string, icon: string, version: string}[]>([])

    const detectWallets = () => {
        if (typeof window === 'undefined' || !window.cardano) return

        availableWallets.value = Object.keys(window.cardano)
            .filter((key) => typeof window.cardano[key]?.enable === 'function')
            .map((key) => {
                const wallet = window.cardano[key]
                return {
                    key,
                    name: wallet.name || key,
                    icon: wallet.icon || '',
                    version: wallet.apiVersion || ''
                }
            })
    }


    const connectWallet = async (walletKey: string) => {
        if (!window.cardano?.[walletKey]) return

        const api = await window.cardano[walletKey].enable()

        const cms = await import('@emurgo/cardano-message-signing-browser')
        const cml = await import('@dcspark/cardano-multiplatform-lib-browser')

        const csl = await import('@emurgo/cardano-serialization-lib-browser')

        const cardano = await import('lucid-cardano')
        await cardano.C.instantiate({ url: new URL("cardano_multiplatform_lib_bg.wasm", "http://localhost:3000/") })
        await cardano.M.instantiateWithInstance({ url: new URL("cardano_message_signing_bg.wasm", "http://localhost:3000/") })

        const provider = new cardano.Blockfrost(
            'https://cardano-mainnet.blockfrost.io/api/v0',
            ''
        )

        lucid.value = await cardano.Lucid.new(provider, 'Mainnet')
        lucid.value.selectWallet(api)
        
        connectedAddress.value = await lucid.value.wallet.address()
        console.info(connectedAddress.value)
    }


    onMounted(async () => {
        console.info('useCip30Wallets!!')

        const cms = await import('@emurgo/cardano-message-signing-browser')
        const cml = await import('@dcspark/cardano-multiplatform-lib-browser')

        const csl = await import('@emurgo/cardano-serialization-lib-browser')
        console.log(csl)

        detectWallets()
    })

    return {
        lucid,
        availableWallets,
        connectedAddress,
        connectWallet,
    }
}