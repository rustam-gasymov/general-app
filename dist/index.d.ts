import * as _reduxjs_toolkit from '@reduxjs/toolkit';
import * as immer_dist_internal from 'immer/dist/internal';

declare const Decrement: () => JSX.Element;

declare const decrementSlice: _reduxjs_toolkit.Slice<{
    value: number;
}, {
    setDecrementValue: (state: immer_dist_internal.WritableDraft<{
        value: number;
    }>, { payload }: {
        payload: any;
        type: string;
    }) => void;
}, "decrement">;

export { Decrement, decrementSlice };
