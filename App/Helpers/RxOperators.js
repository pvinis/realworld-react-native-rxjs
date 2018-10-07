import { Observable, pipe, from, of } from 'rxjs'
import { debounceTime, publishReplay, refCount, tap, map, filter, withLatestFrom, flatMap, distinctUntilChanged } from 'rxjs/operators'
import R from 'ramda'


export const debug = (message: string = '') => {
  return tap(
    next => {
      if (__DEV__) {
        console.log(message, next)
      }
    },
    err => {
      if (__DEV__) {
        console.log('ERROR >>> ', message, err)
      }
    },
    () => {
      if (__DEV__) {
        console.log(message, 'Completed.')
      }
    }
  )
}

/**
 * maps any value to null
 */
export const mapToNull = () => {
  return map(() => null)
}

// /**
//  * filters (lets pass) only values that are not null
//  */
// export const filterNonNull = () => {
//   return filter(x => x !== null)
// }

// /**
//  * filters (lets pass) only values that are null
//  */
// export const filterNull = () => {
//   return filter(x => x === null)
// }

// /**
//  * distinctUntilChanged but with deep equal
//  */
// export const distinctUntilChangedDeep = () =>
//   distinctUntilChanged(R.equals)

// export const withPipeFrom = obs => {
//   return flatMap(value => of(value).pipe(
//     obs(),
//     map(newValue => [value, newValue]),
//   ))
// }

// /**
//  * checks the latest value of `obs`, and if it is equal to `value`, then the value keeps progressing through the pipe.
//  * otherwise the pipe stops.
//  * @param obs: observable
//  * @param value: value to compare to
//  */
// export const continueIfLatest = (obs, value) => {
//   return pipe(
//     withLatestFrom(obs),
//     filter(([a, b]) => b === value),
//     map(([a, b]) => a),
//   )
// }

// /**
//  * checks the latest value of `obs`, and if it is not equal to `value`, then the value keeps progressing through the pipe.
//  * otherwise the pipe stops.
//  * @param obs: observable
//  * @param value: value to compare to
//  */
// export const continueIfNotLatest = (obs, value) => {
//   return pipe(
//     withLatestFrom(obs),
//     filter(([a, b]) => b !== value),
//     map(([a, b]) => a),
//   )
// }

// export const reporterTrack = textOrFn => {
//   return tap(o => {
//     const text = typeSwitch(
//       textOrFn,
//       {
//         'string': str => str,
//         'function': fn => fn(o),
//       },
//       x => x
//     )
//     Reporter.track(text)
//   })
// }

// export const reporterTrackWithProps = (textOrFn, ...args) => {
//   return typeSwitch(
//     textOrFn,
//     {
//       'string': str => {
//         const text = str
//         const props = args[0]
//         return tap(o => Reporter.trackWithProps(text, props))
//       },
//       'function': fn => {
//         if (args.length === 0) {
//           return tap(o => {
//             const [text, props] = fn(o)
//             Reporter.trackWithProps(text, props)
//           })
//         }
//         return pipe(
//           withLatestFrom(...args),
//           tap(allObs => {
//             const [text, props] = fn(allObs)
//             Reporter.trackWithProps(text, props)
//           }),
//           map(allObs => allObs[0]), // keep only the initial observable
//         )
//       },
//     },
//     x => x
//   )
// }

export const request = (apiReq, loading, _testScheduler) => {
  return pipe(
    tap(() => loading && loading.next(true)),
    flatMap(obs => _testScheduler == null
      ? from(apiReq(obs))
      : of(apiReq(obs))),
    tap(() =>loading && loading.next(false)),
  )
}

export const requestData = (apiReq, loading, _testScheduler) => {
  return pipe(
    tap(() => loading && loading.next(true)),
    flatMap(obs => _testScheduler == null
      ? from(apiReq(obs))
      : of(apiReq(obs))),
    map(res => res.data),
    tap(() =>loading && loading.next(false)),
  )
}

// export const mapRequestData = () =>
//   map(res => res.data)

// export const filterStatus = status =>
//   pipe(
//     filter(response => response.status === status),
//   )

// export const filterStatus200 = () =>
//   pipe(
//     filterStatus(200),
//   )

// const is200ish = response =>
//   response.status >= 200 && response.status <= 299

// export const filterStatus200ish = () =>
//   pipe(
//     filter(response => is200ish(response)),
//   )

// export const filterStatusNot200ish = () =>
//   pipe(
//     filter(response => !is200ish(response)),
//   )


// // FIXME: this can be removed once this is resolved
// // https://github.com/ReactiveX/rxjs/issues/3336
// // https://github.com/ReactiveX/rxjs/pull/4059
// export const shareReplay = n =>
//   pipe(
//     publishReplay(n),
//     refCount(),
//   )
