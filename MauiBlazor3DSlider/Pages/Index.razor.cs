using Microsoft.JSInterop;
namespace MauiBlazor3DSlider.Pages
{
    public partial class Index
    {
        protected override async Task OnAfterRenderAsync(bool firstRender)
        {
            await JS.InvokeVoidAsync("Load");
        }

    }
}
