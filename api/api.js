export function apiGetBanner(){
    retuenuni.request({
        url: "https://tea.qingnian8.com/api/bizhi/homeBanner",
        header: {
          "access-key": "282011",
        },
      });
}