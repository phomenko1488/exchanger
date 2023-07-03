export function validate(address, network) {
    return new RegExp(network.regex).test(address)
}


