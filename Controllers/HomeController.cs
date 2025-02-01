using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using portfolio.Models;

namespace portfolio.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }

    public IActionResult Privacy()
    {
        return View();
    }

    public IActionResult bi0s()
    {
        return View();
    }

    public IActionResult Experion()
    {
        return View();
    }

    public IActionResult CarnaticMusic()
    {
        return View();
    }

    public IActionResult ClassicalDance()
    {
        return View();
    }

    public IActionResult JRC()
    {
        return View();
    }

    public IActionResult Scribe()
    {
        return View();
    }
    public IActionResult webapp()
    {
        return View();
    }

    public IActionResult portfolio()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
