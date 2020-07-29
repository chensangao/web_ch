/*
 * @Description: 
 * @Author: chenhao
 * @Date: 2020-07-27 16:57:01
 * @LastEditTime: 2020-07-27 17:02:34
 * @LastEditors: chenhao
 */
// 上源码
; (function (global) {
    global.Promise = Promise
    // 定义promise三种状态
    const PENDING = 'pending'
    const FULFILLED = 'fulfilled'
    const REJECTED = 'rejected'

    function Promise(fn) {
        this.state = PENDING
        this.fulfilledQueue = []
        this.rejectedQueue = []
        try {
            fn(
                // 此处需注意this指向
                (res) => {
                    this._resolve(res)
                },
                (err) => {
                    this._reject(err)
                }
                // 或者this.resolve.bind(this), this.reject.bind(this))
            )
        } catch (e) {
            reject(e)
        }
    }

    Promise.prototype = {
        constructor: Promise,
        _resolve: function (value) {
            if (value instanceof Promise) {
                return value.then(
                    // 此处需注意this指向
                    (res) => {
                        this._resolve(res)
                    },
                    (err) => {
                        this._reject(err)
                    }
                )
            }
            setTimeout(() => {
                if (this.state === PENDING) {
                    this.state = FULFILLED
                    this.value = value
                    this.fulfilledQueue.forEach((fn) => fn(this.value))
                }
            })
        },
        _reject: function (value) {
            setTimeout(() => {
                if (this.state === PENDING) {
                    this.state = REJECTED
                    this.value = value
                    this.rejectedQueue.forEach((fn) => fn(this.value))
                }
            })
        },
        then: function (fulfilled, rejected) {
            this.fulfilled =
                typeof fulfilled === 'function' ? fulfilled : (v) => v
            this.rejected =
                typeof rejected === 'function'
                    ? rejected
                    : (err) => {
                        throw err
                    }
            if (this.state === PENDING) {
                return new Promise((resolve, reject) => {
                    this.fulfilledQueue.push(() => {
                        try {
                            this.value = this.fulfilled(this.value)
                            resolve(this.value)
                        } catch (error) {
                            reject(error)
                        }
                    })
                    this.rejectedQueue.push(() => {
                        try {
                            this.value = this.rejected(this.value)
                            resolve(this.value)
                        } catch (error) {
                            reject(error)
                        }
                    })
                })
            }
            if (this.state === FULFILLED) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        try {
                            this.value = this.fulfilled(this.value)
                            resolve(this.value)
                        } catch (error) {
                            reject(error)
                        }
                    })
                })
            }
            if (this.state === REJECTED) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        try {
                            this.value = this.rejected(this.value)
                            resolve(this.value)
                        } catch (error) {
                            reject(error)
                        }
                    })
                })
            }
        },
    }
})(window)


