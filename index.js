function mooncakeSays(message) {
  let mooncake = 'a(O.o)d';

  if ( !message ) {
    return `${mooncake} chookity?`;
  }

  return `${mooncake} ${message} !`;
}

module.exports.mooncakeSays = mooncakeSays;
