using AutoMapper;
using Entities;
using DTOs;

namespace YDT
{
    public class AutoMapper:Profile
    {
        public AutoMapper()
        {
            CreateMap<Rav, RavDTO>().ReverseMap();

            CreateMap<Shiur, ShiurDTO>().ReverseMap();

            CreateMap<Topic, TopicDTO>().ReverseMap();

            CreateMap<MazalTov,MazalTovDTO> ().ReverseMap(); 
        }
    }
}
