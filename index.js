function mooncakeSays(message) {
  let mooncake = '(O.o)d';

  if ( !message ) {
    return `${mooncake} chookity?`;
  }

  return `${mooncake} ${message} !`;
}

module.exports.mooncakeSays = mooncakeSays;
