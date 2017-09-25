function sieveOfEratosthenes(index) {
    const nums = []
    const primes = []

    for(let i = 0; i <= index; i++) {
        nums.push(true)
    }

    nums[0] = false
    nums[1] = false

    for(let i = 2; i <= Math.sqrt(index); i++) {
        for(let j = 2; j * i <= index; j++) {
            nums[i * j] = false
        }
    }

    for(let i = 0; i < nums.length; i++) {
        if(nums[i]) primes.push(i)
    }
    return primes
}