function DonateButton() {
  return (
    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank" className="mb-2">
      <input type="hidden" name="cmd" value="_s-xclick" />
      <input type="hidden" name="hosted_button_id" value="VWL33SJH88RNW" />
      <button type="submit" className="bg-green-500 hover:bg-green-600 text-gray-900 font-bold uppercase p-1 rounded-lg px-4">Buy Me A Coffee</button>
      <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
    </form>
  )
}

export default DonateButton
