import React from 'react';
export const Emoji = ({ emoji }) => (
    <>
        {emoji === "wave" ?  <img class="lazypreload lazyloaded" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/285/waving-hand_1f44b.png" data-src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/285/waving-hand_1f44b.png" data-srcset="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/144/apple/285/waving-hand_1f44b.png 2x" alt="Waving Hand" title="Waving Hand" width="100" height="100" srcset="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/144/apple/285/waving-hand_1f44b.png 2x"/> : 
        <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/round-pushpin_1f4cd.png" srcset="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/round-pushpin_1f4cd.png 2x" alt="Round Pushpin on Apple iOS 14.6" width="120" height="120"></img>}
    </>
);