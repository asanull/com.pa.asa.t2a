try
{
    function audioModdingTest()
    {
      var dir = '/ui/mods/com.pa.asa.t2a/';

      //Selection
      api.audio.registerCueMod('/SE/Selection/bot/T2_assault', dir + 'modified.wav');
    }
    _.defer(audioModdingTest);
}
catch (e)
{
  console.error(e);
}