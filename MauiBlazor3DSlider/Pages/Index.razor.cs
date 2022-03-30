using Microsoft.JSInterop;
namespace MauiBlazor3DSlider.Pages
{
    public partial class Index
    {
    //    protected override void OnInitialized()
    //    {
    //       //  JS.InvokeVoidAsync("Load");
    //        base.OnInitialized();
    //    }

        protected override void OnAfterRender(bool firstRender)
        {
            if (firstRender)
            JS.InvokeVoidAsync("Load");
            base.OnAfterRender(firstRender);
        }
    }
}
