const index = async () => {
    // register the service worker
    const { registerSW } = await import('virtual:pwa-register')
    registerSW({
        immediate: true,
    })
}

index()
